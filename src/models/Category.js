const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  subcategories: {
    type: [String],
    default: [],
    set: v => {
      if (typeof v === 'string') {
        return v.split(',').map(item => item.trim());
      }
      return v;
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);
