// npm install express
const express = require("express");
// npm install body-parser --save
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  // 두 개의 숫자를 받는 input과 전달하기 위한 form
  const template = `
    <form method="POST">
        <input type="text" name="num1">
        <input type="text" name="num2">
        <input type="submit" value="전송">
    </form>
    `;
  response.send(template);
});

app.post("/", (request, response) => {
  // form으로 보내준 값을 request의 body에서 가져와서 html 코드로 보내줌
  const num1 = Number(request.body.num1);
  const num2 = Number(request.body.num2);
  response.send(`<h1>${num1}+${num2}=${num1 + num2}</h1>`);
});

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1:8080");
});
