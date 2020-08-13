$(document).ready(function() {

    $('#status').val("hello willie");

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