let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  const d = new $.Deferred;
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if(request.status == 200) {
        d.resolve(request);
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
  return d.promise();
}

function setVideo(element) {
  titleArea.innerHTML = element.response[number].title;
  contentArea.innerHTML = element.response[number].content;
  videoArea.setAttribute("src", element.response[number].url);
  number == 2 ? number = 0 : number++;
}

function changeVideo() {
  button.addEventListener('click', e => {
    if(data.length < 1){
      getData().then(function(d) {
        data = d;
        setVideo(data);
      });
    } else {
      setVideo(data);
    }
  })
}

window.onload = changeVideo;