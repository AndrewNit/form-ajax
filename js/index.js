$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    const form = $('form')[0];
    if (!form.checkValidity()) {
        return;
    }
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/andrewtrots@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#e-mail').val(),
            message: $('#message').val()
         },
        dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
        $('#msg').html('You did it!');
    })
    .fail(function(){
        $('#msg').html('Please try again!');
    });
}