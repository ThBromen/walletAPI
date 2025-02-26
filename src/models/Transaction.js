const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  subcategories: {
    type: [String],
    default: [],
    set: v => {
      if (typeof v === 'string') {
        return v.split(',').map(item => item.trim());
      }
      return v;
    }
  },
  account: { type: String, required: true },
  date: { type: Date, required: true },
  transactionType: { 
    type: String, 
    enum: ['expense', 'income'], 
    required: true 
  },
  description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
