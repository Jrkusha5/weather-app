const iconElement=document.querySelector(".weather-icon")
const locationIcon=document.querySelector(".location-icon")
const tempElement=document.querySelector(".tempreture-value p")
const descElement=document.querySelector(".tempreture-description p")
const locationElement=document.querySelector(".locatioin p")
const notificatonElement=document.querySelector(".notification")

var input=document.getElementById("search")
let city=""
let latitude=0.0
let longitude=0.0

input.addEventListener("Keyup",function(event){
    if(event.keyCode===13){
        event.preventDefault();
        city=input.Value
        getSearchWeather(city)
        console.log(city)
    }
})
const weather={}

weather.tempreture={
    unit:"celsius"
}
const KELVIN=273

const key='adcc616cfeb1432877154ca19c8669fd'

if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setposition,showError)
} else{
    notificatonElement.getElementsByClassName.display='block'
    notificatonElement.innerHTML='<p> browser doesnt support geolocation</p>'
}

function setposition(position){
    latitude=position.coords.latitude
    longitude=position.coords.longitude

    getWeather(latitude,longitude)
}
locationIcon.addEventListener("click", function(event){
    console.log('hey')
    getWeather(latitude,longitude)
})

function showError(error){
    notificatonElement.getElementsByClassName.display='block'
    notificatonElement.innerHTML='<p>${error.message}</p>'

}

function getSearchWeather(city){
 let api=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
    fetch(api)
    .then(function (response){
        let data=response.json()
        return data
    })
    .then(function (data){
        weather.tempreture.ValueMath.floor(data.main.temp-KELVIN)
        weather.description=data.weather[0].description
        weather.iconId=data.weather[0].icon
        weather.city=data.name
        weather.country=data.sys.country
    })
    .then(function(){
        displayweather()

    })
}

function getWeather(latitude,longitude){
    let api=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
    fetch(api)
    .then(function (response){
        let data=response.json()
        return data
    })
    .then(function (data){
        weather.tempreture.ValueMath.floor(data.main.temp -KELVIN)
        weather.description=data.weather[0].description
        weather.iconId=data.weather[0].icon
        weather.city=data.name
        weather.country=data.sys.country
    })
    .then(function(){
        displayweather()

    })
}

function displayweather() {
    iconElement.innerHTML=`<img src="icon/${weather.iconId}.png"/>`
    tempElement.innerHTML='${weather.tempreture.Value} *<span>C</span>'
    descElement.innerHTML=weather.description
    locationElement.innerHTML=`${weather,city}, ${weather,country}`  
} 