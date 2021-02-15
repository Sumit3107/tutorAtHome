$(document).ready(function () {
  $("#toggle").click(function () {
    $(".menubar").toggle(
      function () {
        $(this).animate({ width: 0 });
      },
      function () {
        $(this).animate({ width: "auto" });
      }
    );
  });
});
