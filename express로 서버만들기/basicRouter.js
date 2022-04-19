const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("router");
});

// 파람값으로 들고 옴
app.get("/page/:id", function (request, response) {
  const id = request.params.id;
  response.send(`<h1>${id} page </h1>`);
});

// 쿼리값으로 들고 옴
app.get("/user", function (request, response) {
  // 주소에 /user?user="" 입력해야 확인가능
  const user = request.query.user;
  response.send(`<h1>${user} page </h1>`);
});

// get 실습
// 주소 /user/:id 를 이용하여 화면에 id 값 출력
app.get("/user/:id", function (request, response) {
  const id = request.params.id;
  response.send(`${id}`);
});

// 주소 /board 에 쿼리를 이용하여 화면에 id 값 출력
app.get("/board", function () {
  const id = request.query.id;
  response.send(`${id}`);
});

// post : 값을 전달할 때 사용 > body
app.post("/user", function (request, response) {
  const user = request.body.user;
  response.send(`<h1> post ${user}</h1>`);
});

app.put("/user", function (request, response) {
  console.log("put으로 접근했습니다");
  response.send("put 하였습니다");
});

app.delete("/user", function (request, response) {
  console.log("delete으로 접근했습니다");
  response.send("delete 하였습니다");
});

app.listen(8080, function () {
  console.log("Server Running at http://127.0.0.1:8080");
});
