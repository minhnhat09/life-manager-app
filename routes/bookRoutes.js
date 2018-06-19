const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Book = mongoose.model("books");

module.exports = app => {
    app.post("/api/book", async (req, res) => {
        // const { name, amount, type, date } = req.body;
        console.log(req.body);
        const bookToSave = new Book({
          ...req.body,
          _user: req.user.id
        });
        try {
          await bookToSave.save();
          res.send(bookToSave);
        } catch (error) {
          res.status(422).send(error);
         }


    });
    app.get("/api/books", async (req, res) => {
        try {
            const books = await Book.find({ _user: req.user.id });
            res.send(books);
        } catch (error) {
            res.status(422).send(error);
        }
    });

};
