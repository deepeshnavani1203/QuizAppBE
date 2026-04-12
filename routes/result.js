const router = require("express").Router();
const Result = require("../models/Result");
const User = require("../models/User");

router.post("/submit", async (req, res, next) => {
  try {
    const {
      userId,
      quizId,
      score,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      timeTaken,
      suspiciousActivity = [],
      topicPerformance = [],
    } = req.body;

    const result = new Result({
      userId,
      quizId,
      score,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      timeTaken,
      suspiciousActivity,
      topicPerformance,
    });

    await result.save();

    const user = await User.findById(userId);
    if (user) {
      user.quizHistory.push({
        resultId: result._id,
        quizId,
        score,
        date: new Date(),
      });
      const scorePercent =
        totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
      const previousTotal = user.analytics.totalQuizzesTaken || 0;
      const previousAverage = user.analytics.averageScore || 0;
      user.analytics.totalQuizzesTaken = previousTotal + 1;
      user.analytics.averageScore =
        previousTotal === 0
          ? scorePercent
          : (previousAverage * previousTotal + scorePercent) /
            (previousTotal + 1);

      if (Array.isArray(topicPerformance) && topicPerformance.length > 0) {
        const topicMap = {};
        topicPerformance.forEach((topic) => {
          if (!topic.topic) return;
          if (!topicMap[topic.topic]) {
            topicMap[topic.topic] = { correct: 0, total: 0 };
          }
          topicMap[topic.topic].correct += topic.correct || 0;
          topicMap[topic.topic].total += topic.total || 0;
        });

        const topics = Object.entries(topicMap).map(([topic, data]) => ({
          topic,
          ratio: data.total > 0 ? data.correct / data.total : 0,
        }));

        const sortedTopics = topics.sort((a, b) => b.ratio - a.ratio);
        user.analytics.strengths = sortedTopics
          .filter((topic) => topic.ratio >= 0.7)
          .slice(0, 5)
          .map((topic) => topic.topic);
        user.analytics.weakTopics = sortedTopics
          .filter((topic) => topic.ratio <= 0.5)
          .slice(0, 5)
          .map((topic) => topic.topic);
      }

      await user.save();
    }

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/user/:userId", async (req, res, next) => {
  try {
    const results = await Result.find({ userId: req.params.userId });
    res.json(results);
  } catch (error) {
    next(error);
  }
});

router.get("/quiz/:quizId", async (req, res, next) => {
  try {
    const results = await Result.find({ quizId: req.params.quizId });
    res.json(results);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Result not found" });
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
