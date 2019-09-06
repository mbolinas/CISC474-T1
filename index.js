$(function(){
    $("#nameform").submit(function(e){
        e.preventDefault();
        $(".jumbotron").text($("#fname").val() + " " + $("#lname").val());
        $(".jumbotron").removeClass('d-none');
        return false;
    });
});