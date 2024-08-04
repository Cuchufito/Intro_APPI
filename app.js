document.addEventListener("DOMContentLoaded", function(){
    //Como obtener la informacion de una appi
    //Usando Fetch
    //const promesa = fetch('https://www.dragonball-api.com/api/characters')
    //console.log(promesa);
    fetch('https://www.dragonball-api.com/api/characters')
    .then(respuesta => respuesta.json())
    .then(data => console.log(data));
});