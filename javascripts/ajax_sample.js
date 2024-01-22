$(function () {
  const titleArea = $("#title");
  const contentArea = $("#content");
  const videoArea = $("#video");
  const btn = $("#btn");
  let jsonIndex = 0;

  function getData() {
    btn.click(function () {
      $.ajax('ajax.json', {
        type: 'GET',
        success: function (data) {
          titleArea.html(data[jsonIndex].title);
          contentArea.html(data[jsonIndex].content);
          videoArea.attr('src', data[jsonIndex].url);
          jsonIndex == 2 ? jsonIndex = 0 : jsonIndex++;
        },
      })
    });
  };

  getData();
})
