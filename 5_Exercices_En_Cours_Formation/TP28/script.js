let bodySelector = document.querySelector("body");
let sectionSelector = document.querySelector("section");
let villeSelector = document.querySelector(".ville");
let tempSelector = document.querySelector(".temp");
let descSelector = document.querySelector(".desc");
let buttonSelector = document.querySelector("#bouton");
let imgSelector = document.querySelector("img");



function fillElements(temp, ville, description, icon) {
    console.log("hello");
    imgSelector.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    villeSelector.textContent = ville;
    tempSelector.textContent = `Température : ${Math.round(temp)} °C`;
    descSelector.textContent = description;
}


buttonSelector.addEventListener("click",function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector("#meteo").value}&appid=91f40637a9cf837a5cee29d14c07e41b&units=metric&lang=fr`)
  .then((response) => {
    return response.json()
  })
  .then((meteo) => {
    console.log(meteo);
    fillElements(meteo.main.temp, meteo.name, meteo["weather"]["0"].description,meteo["weather"]["0"].icon);  
  })

})