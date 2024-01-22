$(function () {
  const titleArea = $("#title");
  const contentArea = $("#content");
  const videoArea = $("#video");
  const btn = $("#btn");
  let jsonIndex = 0;

  function getData() {
    return $.ajax("ajax.json", {
      type: 'GET'
    });
  }
  
  function changeVideo() {
    btn.click(function () {
      getData().then(function(data){
        titleArea.html(data[jsonIndex].title);
        contentArea.html(data[jsonIndex].content);
        videoArea.attr("src", data[jsonIndex].url);
        jsonIndex == 2 ? (jsonIndex = 0) : jsonIndex++;
      })
    });

  }

  changeVideo();
});
