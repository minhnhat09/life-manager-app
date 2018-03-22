const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Spending = mongoose.model("spendings");

module.exports = app => {
  app.post("/api/spending", async (req, res) => {
    const { name, amount, type, date } = req.body;
    console.log(req.body);
    const spendingToSave = new Spending({
      name,
      amount,
      type,
      date: Date.now(),
      _user: req.user.id
    });
    try {
      await spendingToSave.save();
      res.send(spendingToSave);
    } catch (error) {
      res.status(422).send(error);
    }
  });


  app.delete("/api/spending/:index", async (req, res) => {
    const idSpending = req.params.index;
    console.log(req.params, idSpending);
    try {
      const spending = await Spending.findByIdAndRemove({ _id: req.params.index });
      // const result = await spending.remove();
      res.send(spending);
    } catch (error) {
      res.status(422).send(error);
    }
  });

  app.get("/api/spendings", async (req, res) => {
    try {
      const spendings = await Spending.find({ _user: req.user.id });
      res.send(spendings);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
