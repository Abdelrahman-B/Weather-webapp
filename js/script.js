let todaysTemp = document.getElementById('today-temp');
let todayTempAtmos = document.getElementById('today-temp-atmos');
let tempLocation = document.getElementById('temp-location');
let tomorrowTemp = document.getElementById('tomorrow-temp')
let temp2 = document.getElementById('temp2');
let temp3 = document.getElementById('temp3');
let temp4 = document.getElementById('temp4');
let temp5 = document.getElementById('temp5');
let temp6 = document.getElementById('temp6');
let temp7 = document.getElementById('temp7');
let temp8 = document.getElementById('temp8');




async function getData(location) {
    console.log(location)
    let long = location.coords.longitude;
    let lat = location.coords.latitude;
    
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?lat=${lat}&long=${long}&format=json&u=c`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a0fc6ef169msh72c7236462bb50ep11fccdjsn86744f83a617',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        showInHTML(result)
    } catch (error) {
        console.error(error);
    }
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getData);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
}
  
getLocation()


function showInHTML(data){
    todaysTemp.innerHTML=`
    <p class="h2 m-0 fw-bold">${data.current_observation.condition.text} </p>
    <p class="display-2 m-0 fw-bold">${data.current_observation.condition.temperature}°</p>
    <div class="d-flex gap-3">
        <p class="h6">High= ${data.forecasts[0].high}</p>
        <p class="h6">Low= ${data.forecasts[0].low}</p>
    </div>
    `
    todayTempAtmos.innerHTML=`
        <div class="d-flex flex-column gap-2 text-center">
            <p class="h4">${data.current_observation.atmosphere.pressure}</p>
            <p class="h6 fw-light">Pressure</p>
        </div>
    
        <div class="d-flex flex-column gap-2 text-center">
            <p class="h4">${data.current_observation.atmosphere.visibility}</p>
            <p class="h6 fw-light">Visibility</p>
        </div>
    
        <div class="d-flex flex-column gap-2 text-center">
            <p class="h4">${data.current_observation.atmosphere.humidity}</p>
            <p  class="h6 fw-light">Humidity</p>
        </div>
    `

    tempLocation.innerHTML=`
    <div class="d-flex flex-column justify-content-center align-items-center mb-2">
        <p class="display-5 fw-bold m-0">${data.location.city}</p>
        <p class="px-2 bg-cust-blue rounded-pill">${data.location.country}</p>
    </div>
    
    `

    tomorrowTemp.innerHTML=`
    <p class="px-2 m-0 h4">Tomorrow</p>
    <p class="display-5 fw-bold m-0">${data.forecasts[1].high}/${data.forecasts[1].low}°</p>
    <p class="h5 fw-light m-0">${data.forecasts[1].text}</p>
    
    `

    temp2.innerHTML=`
        <p class="px-2 m-0 h5">${data.forecasts[2].day}</p>
        <p class="h3 fw-bold m-0">${data.forecasts[2].high}/${data.forecasts[2].low}°</p>
        <p class="h6 fw-light m-0">${data.forecasts[2].text}</p>
    `

    temp3.innerHTML=`
        <p class="px-2 m-0 h5">${data.forecasts[3].day}</p>
        <p class="h3 fw-bold m-0">${data.forecasts[3].high}/${data.forecasts[3].low}°</p>
        <p class="h6 fw-light m-0">${data.forecasts[3].text}</p>
    `

    temp4.innerHTML=`
        <p class="px-2 m-0 h5">${data.forecasts[4].day}</p>
        <p class="h3 fw-bold m-0">${data.forecasts[4].high}/${data.forecasts[4].low}°</p>
        <p class="h6 fw-light m-0">${data.forecasts[4].text}</p>
    `

    temp5.innerHTML=`
        <p class="px-2 m-0 h5">${data.forecasts[5].day}</p>
        <p class="h3 fw-bold m-0">${data.forecasts[5].high}/${data.forecasts[5].low}°</p>
        <p class="h6 fw-light m-0">${data.forecasts[5].text}</p>
    `

    temp6.innerHTML=`
        <p class="px-2 m-0 h5">${data.forecasts[6].day}</p>
        <p class="h3 fw-bold m-0">${data.forecasts[6].high}/${data.forecasts[6].low}°</p>
        <p class="h6 fw-light m-0">${data.forecasts[6].text}</p>
    `

    temp7.innerHTML=`
        <p class="px-2 m-0 h5">${data.forecasts[7].day}</p>
        <p class="h3 fw-bold m-0">${data.forecasts[7].high}/${data.forecasts[7].low}°</p>
        <p class="h6 fw-light m-0">${data.forecasts[7].text}</p>
    `

    temp8.innerHTML=`
        <p class="px-2 m-0 h5">${data.forecasts[8].day}</p>
        <p class="h3 fw-bold m-0">${data.forecasts[8].high}/${data.forecasts[8].low}°</p>
        <p class="h6 fw-light m-0">${data.forecasts[8].text}</p>
    `

}