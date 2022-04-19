const express = require("express");

const app = express();

app.get("/test/*", (request, response) => {
  // 응답코드값 > 200: ok, 404: 페이지X
  response.status(404);
  response.type("text/plain");
  response.set("methodA", "abcd");
  response.send("임의로 바꾼 설정입니다");
});

app.get("/redirect", (request, response) => {
  response.redirect("http://naver.com");
});

app.get("/", (request, response) => {
  // npm install -g nodemon 으로 노드몬 설치
  // 현재 폴더에 바로 있다면 nodemon 실행할js파일
  response.send("nodemon으로 실행중입니다");
});

app.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});
