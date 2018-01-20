$('#input').on('keydown',
    function () {
        let textValue = $('#input').val();
        printHtml(textValue);
    });


function printHtml(data) {
    $('#print_space').html(data);
}