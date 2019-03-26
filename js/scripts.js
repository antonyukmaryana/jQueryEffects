$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $("button#hello").click(function() {
      $("ul#user").append("<li>Hello!</li>");
      $("ul#webpage").append("<li>Why hello there!</li>");
    });

    $("button#goodbye").click(function() {
      $("ul#user").append("<li>Goodbye!</li>");
      $("ul#webpage").append("<li>Goodbye, dear user!</li>");
    });

    $("button#stop").click(function() {
      $("ul#user").append("<li>Stop copying me!</li>");
      $("ul#webpage").append("<li>Pardon me. I meant no offense.</li>");
    });
});
