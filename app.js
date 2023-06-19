let center = [41, 69];

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 20
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'https://www.flaticon.com/free-icon/placeholder_684908?term=map&page=1&position=3&origin=search&related_id=684908',
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -44]
    });

    // map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');

    map.geoObjects.add(placemark);



    // Event listener for the "Get Location" button
    document.getElementById('getLocationButton').addEventListener('click', function() {
        // Check if geolocation is supported by the browser
        if ("geolocation" in navigator) {
            // Prompt user for permission to access their location
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const userLocation = [lat, lng];

                    // Update the map with the user's location
                    map.setCenter(userLocation);
                    placemark.geometry.setCoordinates(userLocation);
                },
                function(error) {
                    console.error("Foydalanuvchi ma'lmotlarini olishni iloji bo'lmadi: ", error);
                }
            );
        } else {
            console.error("Geolakatsiya browser tomonidan qo'llab quvvatlanmaydi.");
        }
    });
}

ymaps.ready(init);