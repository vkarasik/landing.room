window.addEventListener('DOMContentLoaded', function () {
    var shops = document.getElementsByClassName('shop__location');
    for (i = 0; i < shops.length; i++) {
        shops[i].addEventListener('click', function (e) {
            e.preventDefault();
            var target = e.target.id;
            var targetObj = addressData[target];
            myMap.geoObjects.removeAll();
            for (i = 0; i < targetObj.length; i++) {
                var mark = new ymaps.Placemark(addressData[target][i].coordinates, addressData[target][i].properties,
                    addressData[target][i].options);
                myMap.geoObjects.add(mark);
            }
        })
    };

    /* var allshops = document.getElementById('allshops');
    allshops.addEventListener('click', function (e) {
        e.preventDefault();
        placeMarks();
    }); */

    ymaps.ready(init);
    // Инициализация карты
    function init() {
        myMap = new ymaps.Map('map', {
            center: [53.987060, 27.678909],
            zoom: [11],
            controls: ['zoomControl'],
            scroll: false
        });
        myMap.behaviors.disable('scrollZoom');
        placeMarks();
    }

    function placeMarks() {
        for (key in addressData) {
            for (i = 0; i < addressData[key].length; i++) {
                var mark = new ymaps.Placemark(addressData[key][i].coordinates, addressData[key][i].properties,
                    addressData[key][i].options);
                myMap.geoObjects.add(mark);
            }
        }
    }

    var addressData = {
        "cdlroom": [{
            "coordinates": [53.987060, 27.678909],
            "properties": {
                "hintContent": "CDL Room",
                "balloonContent": "Минск, д. Боровляны, ул. 40 лет Победы, 27/1"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [70, 70]
            }
        }]
    }
})