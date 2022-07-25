const CommentCtrl = require("../controllers/comment.controller");

module.exports = (app) => {
  app.post("/api/comment/:groceryswaId", CommentCtrl.addNewComment);
};
