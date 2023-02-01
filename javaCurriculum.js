var parrafo = document.getElementById("información_mostrada")
document.getElementById("boton_biografia").addEventListener('click',function(){

    parrafo.innerHTML = "Samantha Chung"

})    

                                                                                                                 
   

document.getElementById("boton_email").addEventListener('click',function(){
    parrafo.innerHTML = "SamanthaChung@outlookinggood.com"
    
})

document.getElementById("boton_calendario").addEventListener('click', function(){
    parrafo.innerHTML = "31/02/1982"
})

document.getElementById("boton_direccion").onclick = function(){
    parrafo.innerHTML = "Calle falsa 123"
}

document.getElementById("boton_telefono").onclick = function(){
    parrafo.innerHTML = "Tel: 3313901239239"
}

var x = document.getElementById("pruebalocalizacion")

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML = "el servicio de geolocalizacion no está permitida en este navegador"
    }
    
}

function showPosition(position){
    x.innerHTML = "latitud: " + position.coords.latitude + "<br>Longitud: " + position.coords.longitude;
}



