
$(document).ready(function() {
  $("#formOne").click(function(event) {
    var name = $("input#name").val();
    var reason = $("input#reason").val();
    var date = $("input#date").val();
    var time = $("input#time").val();

    
    $(".name").text(name);
    $(".reason").text(reason);
    $(".date").text(date);
    $(".time").text(time);

    $("#story").fadeIn();
    $("#formOne").fadeOut();

    event.preventDefault();
  });
});