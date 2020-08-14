$(document).ready(function() {

    $("#status").val("hello willie");

    $("#a").attr("src", 'img/innovatelogo.png');

    $("#clickme").click(function() {
        var userAnswer = $("#answer").val();
        $("#status").html(userAnswer);
    });

    $('h1').click(function() {
        $(this).css('background-color', 'yellow');
    });

    $('p').dblclick(function() {
        $('p').css('font-size', '28px');
    });

    $('li').hover(function() {
            $('li').css('color', 'red');
        },
        function() {
            $('li').css('color', '#000');
        }
    );

});