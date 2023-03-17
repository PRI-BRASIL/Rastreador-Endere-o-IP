function success(pos){
     console.log(pos.coords.latitude);
}
navigator.geolocation.getCurrentPosition(success);