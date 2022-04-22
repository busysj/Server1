const socket = io();

socket.on("connect", function () {
  const input = document.querySelector("#test");
  input.value = "접속됨";
});

// 전송함수(button onclick의 연결된 함수)
function send() {
  // index.html 파일의 input태그의 id를 통해 value값을 들고 온다
  const message = document.querySelector("#test").value;
  // input의 value 값을 빈 값으로 넣어준다
  document.querySelector("#test").value = "";
  // 소켓을 통해서 send 이벤트를 만들어 데이터를 보내준다
  socket.emit("send", { msg: message });
}

// 소켓을 통해 값 전달
socket.on("send", function (data) {
  const chatting = document.querySelector("#chatting");
  const item = document.createElement("li");
  item.textContent = data.msg;
  chatting.appendChild(item);
});
