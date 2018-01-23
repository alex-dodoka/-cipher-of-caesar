$('#input').keyup(
    function () {
        const offset = 3;

        let primordialString = $('#input').val(),
            encryptedString = "";

        for (let i = 0; i < primordialString.length; i++) {
            let symbolCode = primordialString.charCodeAt(i);
            symbolCode += offset;
            encryptedString += String.fromCharCode(symbolCode);
        }
        printHtml(encryptedString);
    });


function printHtml(data) {
    $('#encrypted_string').html(data);
}