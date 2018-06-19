const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    bookName: String,
    author: String,
    page: String,
    category: String,
    tags: [{
        name: String,
        className: String
    }],
    bookImageUrl: String,
    comment: String,
    status: String,
    progress: String,
    dateCreate: String,
    dateUpdate: String,
    readTime: String,
    source: {
        audio: Boolean,
        ebook: Boolean,
        paper: Boolean,
    },
    _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("books", bookSchema);
