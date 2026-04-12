const router = require("express").Router();
const Quiz = require("../models/Quiz");

router.get("/", async (req, res, next) => {
  try {
    const quizzes = await Quiz.find().select(
      "title category description timeLimit",
    );
    res.json(quizzes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    const quizWithQuestions = {
      id: quiz._id,
      title: quiz.title,
      category: quiz.category,
      description: quiz.description,
      timeLimit: quiz.timeLimit,
      questions: quiz.questions.map((question) => ({
        id: question._id,
        questionText: question.questionText,
        options: question.options,
        topic: question.topic,
      })),
    };

    res.json(quizWithQuestions);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.json({ message: "Quiz deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
