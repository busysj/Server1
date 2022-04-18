// express 모듈을 사용해서 서버 생성
const { resonse } = require("express");
const express = require("express");

//서버 생성
// express(); 함수(생성자)를 통해 서버 생성
// 서버의 기능을 가진 객체 생성 : 포트를 열어서 외부에서 접근가능하게함
// 요청이 왔을 때 함수 실행 > 화면 출력, 기능 실행
const app = express();

// request 이벤트 리스너 설정
// 요청이 왔을 때 실행 할 함수 지정
app.use((request, response) => {
  // 화면에 아래의 html 태그를 출력
  response.send("<h1>Hello express</h1>");
});

// 서버를 실행
// 먼저 포트번호를 지정하고 포트번호를 통해 외부에서 접근가능하게 함
app.listen(8080, () => {
  // 서버가 열리자마자 실행되는 console.log() 내용
  console.log("Server running at http://127.0.0.1:8080");
});
