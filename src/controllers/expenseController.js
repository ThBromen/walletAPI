const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;
    const expense = new Expense({ user: req.user.id, amount, category, description });

    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
