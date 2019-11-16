window.addEventListener('DOMContentLoaded', function () {

    function showOverlay() {
        var videoButons = document.getElementsByClassName('button_video');
        if (videoButons.length == 0) {
            return;
        }
        var iframe = document.getElementById('video-player');
        var overlay = document.getElementById('overlay');
        for (i = 0; i < videoButons.length; i++) {
            videoButons[i].addEventListener('click', function () {
                iframe.src = this.dataset.src;
                overlay.style.display = 'block';
            })
        }
        overlay.addEventListener('click', function () {
            this.style.display = 'none';
            iframe.src = '';
        })
    }

    showOverlay();


    $('.header__burger').on('click', function (e) {
        // alert(e.target)
        // e.target.preventDefault();
        $('.header__submenu').stop(true, true).slideToggle();

        var host = window.location.origin;

        if ($(e.target).attr('src').indexOf('icon_burger.svg') != -1) {
            $(e.target).attr('src', host + '/img/icon_cancel.svg')
        } else {
            $(e.target).attr('src', host + '/img/icon_burger.svg')
        }
    })

    

    
})