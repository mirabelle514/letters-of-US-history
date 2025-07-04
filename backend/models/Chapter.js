import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
  president: { type: String, required: true }, // President's name
  successor: { type: String, required: true }, // Successor's name
  letterTitle: { type: String, required: true }, // Title of the letter
  letterContent: { type: String, required: true }, // The imagined letter content
  historicalAnalysis: { type: String, required: true }, // Historical analysis section
  sources: [{ type: String }], // Array of source citations
  keyThemes: [{ type: String }], // Key themes or topics covered
  historicalContext: { type: String }, // Brief historical context
  presidencyYears: { type: String }, // Years in office
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

chapterSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Chapter = mongoose.model('Chapter', chapterSchema);
export default Chapter;
