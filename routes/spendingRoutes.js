const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Spending = mongoose.model("spendings");

module.exports = app => {
  const spendings = [
    {
      name: "auchan",
      amount: 15,
      type: "cb giang",
      date: "21-01-2001"
    }
  ];
  app.get("/api/spendings", (req, res) => {
    console.log(req.user);
    res.json(spendings);
  });
  app.post("/api/spendings", async (req, res) => {
    const { name, amount, type, date } = req.body;
    console.log(req.body);
    const spendingToSave = new Spending({
      name,
      amount,
      type,
      date: Date.now(),
      _user: req.user.id
    });
    console.log("spendingtosave", spendingToSave);
    try {
      await spendingToSave.save();
      res.send(spendingToSave);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
