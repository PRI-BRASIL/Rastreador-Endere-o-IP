// função de solicitação de busca
export async function onFetch(url) {
    const response = await fetch(url)
    const json = await response.json()
    return json
}

//Função de validação de regex IP
export function validateIPaddress(inputText) {
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (inputText.match(ipformat)) {
        return true;
    }
    else {
        return false;
    }
}


//Função de preenchimento dos campos (IP, localização, fuso horário e ISP)
export function fillInFields(obj) {
    const ip = document.querySelector('.ip')
    const location = document.querySelector('.location')
    const timezone = document.querySelector('.timezone')
    const isp = document.querySelector('.isp')

    ip.innerHTML = obj.ip
    location.innerHTML = `${obj.location.city}, ${obj.location.region}`
    timezone.innerHTML = `UTC ${obj.location.timezone}`
    isp.innerHTML = obj.isp
}


//INICIALIZA A FUNÇÃO MAPA
var map;

export function initializeMap(obj) {
    const lat = obj.location.lat
    const lng = obj.location.lng


    if (map === undefined) 
console.log(map);

function success(pos){
     console.log(pos.coords.latitude, pos.coords.longitude);
     h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;

     if (map === undefined){
         map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
     } else {
        map.remove();
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
     }
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
          .bindPopup('Eu estou aqui')
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

}
