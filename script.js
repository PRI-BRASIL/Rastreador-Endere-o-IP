let h2 = document.querySelector('h2');

function success(pos){
     console.log(pos.coords.latitude, pos.coords.longitude);
     h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;
     
     var map = L.map('mapid').setView([51.505, -0.09], 13);

     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
       .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
       .openPopup();
}

function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error,{
    enableHighAccuracy: true,
    timeout:5000

});

//navigator.geolocation.clearwatch(watchID);não vai mais monitorar a posição atual


