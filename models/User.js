const mongoose = require("mongoose");

const quizHistorySchema = new mongoose.Schema(
  {
    resultId: { type: mongoose.Schema.Types.ObjectId, ref: "Result" },
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
    score: { type: Number },
    totalQuestions: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
  },
  { _id: false },
);

const analyticsSchema = new mongoose.Schema(
  {
    weakTopics: { type: [String], default: [] },
    strengths: { type: [String], default: [] },
    totalQuizzesTaken: { type: Number, default: 0 },
    averageScore: { type: Number, default: 0 },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    quizHistory: { type: [quizHistorySchema], default: [] },
    analytics: { type: analyticsSchema, default: () => ({}) },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
