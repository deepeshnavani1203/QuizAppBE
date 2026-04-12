const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Result = require("../models/Result");

const SALT_ROUNDS = 10;

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "name, email, and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      quizHistory: user.quizHistory,
      analytics: user.analytics,
    };

    res.status(201).json({ message: "Signup successful", user: userResponse });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      quizHistory: user.quizHistory,
      analytics: user.analytics,
    };

    res.json({ message: "Login successful", user: userResponse });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { firebaseId, name, email } = req.body;
    if (!firebaseId || !name || !email) {
      return res
        .status(400)
        .json({ error: "firebaseId, name, and email are required" });
    }

    let user = await User.findOne({ firebaseId });
    if (user) {
      return res.status(200).json(user);
    }

    user = new User({ firebaseId, name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/history", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "quizHistory.quizId",
      "title category",
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user.quizHistory || []);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/analytics", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.analytics && user.analytics.totalQuizzesTaken !== undefined) {
      return res.json(user.analytics);
    }

    const results = await Result.find({ userId: user._id });
    const summary = {
      weakTopics: [],
      strengths: [],
      totalQuizzesTaken: results.length,
      averageScore: 0,
    };

    if (results.length > 0) {
      const topicMap = {};
      let totalPercent = 0;

      results.forEach((result) => {
        const scorePercent =
          result.totalQuestions > 0
            ? (result.score / result.totalQuestions) * 100
            : 0;
        totalPercent += scorePercent;

        result.topicPerformance.forEach((topic) => {
          if (!topic.topic) return;
          if (!topicMap[topic.topic]) {
            topicMap[topic.topic] = { correct: 0, total: 0 };
          }
          topicMap[topic.topic].correct += topic.correct || 0;
          topicMap[topic.topic].total += topic.total || 0;
        });
      });

      const topics = Object.entries(topicMap).map(([topic, data]) => ({
        topic,
        ratio: data.total > 0 ? data.correct / data.total : 0,
      }));

      const sortedTopics = topics.sort((a, b) => b.ratio - a.ratio);
      summary.strengths = sortedTopics
        .filter((topic) => topic.ratio >= 0.7)
        .slice(0, 5)
        .map((topic) => topic.topic);
      summary.weakTopics = sortedTopics
        .filter((topic) => topic.ratio <= 0.5)
        .slice(0, 5)
        .map((topic) => topic.topic);
      summary.averageScore = totalPercent / results.length;
    }

    user.analytics = summary;
    await user.save();
    res.json(summary);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
