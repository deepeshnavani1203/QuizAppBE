const mongoose = require('mongoose');

const suspiciousActivitySchema = new mongoose.Schema({
  type: { type: String },
  timestamp: { type: Date }
}, { _id: false });

const topicPerformanceSchema = new mongoose.Schema({
  topic: { type: String },
  correct: { type: Number, default: 0 },
  total: { type: Number, default: 0 }
}, { _id: false });

const resultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  wrongAnswers: { type: Number, required: true },
  timeTaken: { type: Number, required: true },
  suspiciousActivity: { type: [suspiciousActivitySchema], default: [] },
  topicPerformance: { type: [topicPerformanceSchema], default: [] }
}, {
  timestamps: true
});

module.exports = mongoose.model('Result', resultSchema);
