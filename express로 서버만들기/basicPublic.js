const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", (request, response) => {
  // 오디오 파일과 비디오 파일을 public 폴더에 넣어서 확인하기
  const template = `
    <h1>Hello express</h1>
    <a href="./정적파일.html">정적파일.html</a><br>
    <a href="./s.jpg">사진1</a><br>
    <a href="./p.jpg">사진2</a><br>
    <a href="https://youtu.be/5nQ_C0MjgbM">비디오1</a><br>
    <a href="https://player.vimeo.com/external/553838564.hd.mp4?s=117a06800094ff392923eab620ef661199418ede&profile_id=174">비디오2</a>
    `;
  response.send(template);
});

app.listen(8080, () => {
  console.log("Server running at http://127.0.0.1:8080");
});
