module.exports = app => {
  const spendings = {
    id: "",
    name: "Lean Start up",
    author: "",
    datePublished: "",
    description: "",
    comment: "",
    chapters: [
      {
        id: "",
        name: "",
        mainIdea: "ý chính của tác giả",
        comment: "nhận xét của bản thân"
      }
    ],
    status: "EC",
    category: "startup",
    point: "",
    dateStartRead: "",
    dateFinishRead: ""
  };
  app.get("/api/spendings", (req, res) => {
    res.json(spendings);
  });
  app.post("/api/spendings", (req, res) => {
    console.log(req.body);
    res.send(req.body);
  });
};
