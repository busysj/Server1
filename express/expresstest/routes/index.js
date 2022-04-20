var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hello World" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "home" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "login" });
});

router.post("/user", function (req, res, next) {
  const name = req.body.name;
  // views에 있는 동일한 이름의 ejs파일을 찾아서 가져온다.
  res.render("user", { title: "login", user: name });
});

module.exports = router;
