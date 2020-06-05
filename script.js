const myBtn = document.querySelector("#sendBtn");
const messageIn = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");

myBtn.addEventListener("click", sendMsg);

function sendMsg() {
  let content = messageIn.value;
  //   console.log(content);
  if (content === "") {
    alert("Please Enter Valid Value");
  } else {
    messageOut.innerHTML = content;
    messageIn.value = "";
  }
}
