window.addEventListener('DOMContentLoaded', function () {

    var buttons = document.querySelectorAll('.callback');
    buttons.forEach(function(item){
        item.addEventListener('click', function (e) {
            shops.style.display = 'block';
        })
    })
    var shopButton = document.getElementById('shops-button');
    var shops = document.getElementById('shops');
    var close = document.getElementById('close-map');

    close.addEventListener('click', function () {
        shops.style.display = 'none';
    })

    var randomNum = Math.floor((Math.random() * 1000));
    var title = document.title;
    $('.form').submit(function(e){
        e.preventDefault();
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize() + '&num=' + randomNum + '&title=' + title,
            success: function(response){
                $form[0].reset();
                $('.form__msg').slideDown().text(response);
                setTimeout(function(){$('.form__msg').slideUp().text('')}, 3000);
                // setTimeout(function(){shops.style.display = 'none';}, 5000);
            },
            error: function(response){
                alert('Ошибка при отправке формы! Пожалуйста повторите!');
            }
        });
    });
})