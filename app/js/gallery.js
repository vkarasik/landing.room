window.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.detail__gallery-item');
    items.forEach(function(item){
        item.addEventListener('click', function(e){
            document.querySelector(".detail__gallery-photo img").src = e.target.src;
        })
    })
})