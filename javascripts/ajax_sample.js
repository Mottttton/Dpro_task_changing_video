let jsonIndex = 0;
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");
const btn = document.getElementById("btn");

function getData() {
  btn.addEventListener("click", function () {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if (request.status == 200) {
          titleArea.innerHTML = request.response[jsonIndex].title;
          contentArea.innerHTML = request.response[jsonIndex].content;
          videoArea.setAttribute("src", request.response[jsonIndex].url);
          jsonIndex == 2 ? jsonIndex = 0 : jsonIndex++;
        }
      }
    };
    // リクエスト送信
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  });
}

window.onload = getData;
