function weatherAPI(){

    // bredde og lengdegrad variabler for å sjekke alle koordinater fra 90.0 90.0 til -90.0 -90.0
    lat = document.getElementById('lat').value;
    lon = document.getElementById('lon').value;


    //sjekker input fields
    if((lat > 90) & (lon < 90)){
        alert("Breddegrad verdi for høy.");
    }if((lat < 90) & (lon > 90)){
        alert("Lengdegrad verdi for høy.");
    }if((lat > 90) & (lon > 90)){
        alert("Breddegrad og lengdegrad verdi for høy.");
    }

    //urlAPI variabel som benytter 'lat' og 'lon' variablene for å sjekke været på hvilken som helst koordinater
    let urlAPI = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat='+lat+'&lon='+lon;

    fetch(urlAPI)
    .then(res => {
        if(!res.ok){
            throw new Error("FAILURE:");
        }
        return res.json();
    })
    .then(data => {
        const weatherData = data;
        console.log(weatherData);
        // dag1
        document.getElementById('d1_apatsl').innerHTML="Lufttrykk ved havnivå: " + weatherData.properties.timeseries[0].data.instant.details.air_pressure_at_sea_level + " hPa"
        document.getElementById('d1_at').innerHTML="Lufttemperatur: " + weatherData.properties.timeseries[0].data.instant.details.air_temperature + "°C"
        document.getElementById('d1_caf').innerHTML="Skyområdefraksjon: " + weatherData.properties.timeseries[0].data.instant.details.cloud_area_fraction + "%"
        document.getElementById('d1_rh').innerHTML="Relativ fuktighet: " + weatherData.properties.timeseries[0].data.instant.details.relative_humidity + "%"
        document.getElementById('d1_wfd').innerHTML="Vind fra retning: " + weatherData.properties.timeseries[0].data.instant.details.wind_from_direction + "°"
        document.getElementById('d1_ws').innerHTML="Vindfart: " + weatherData.properties.timeseries[0].data.instant.details.wind_speed + " m/s"

        // dag 2
        document.getElementById('d2_apatsl').innerHTML="Lufttrykk ved havnivå: " + weatherData.properties.timeseries[1].data.instant.details.air_pressure_at_sea_level + " hPa"
        document.getElementById('d2_at').innerHTML="Lufttemperatur: " + weatherData.properties.timeseries[1].data.instant.details.air_temperature + "°C"
        document.getElementById('d2_caf').innerHTML="Skyområdefraksjon: " + weatherData.properties.timeseries[1].data.instant.details.cloud_area_fraction + "%"
        document.getElementById('d2_rh').innerHTML="Relativ fuktighet: " + weatherData.properties.timeseries[1].data.instant.details.relative_humidity + "%"
        document.getElementById('d2_wfd').innerHTML="Vind fra retning: " + weatherData.properties.timeseries[1].data.instant.details.wind_from_direction + "°"
        document.getElementById('d2_ws').innerHTML="Vindfart: " + weatherData.properties.timeseries[1].data.instant.details.wind_speed + " m/s"

        // dag 3
        document.getElementById('d3_apatsl').innerHTML="Lufttrykk ved havnivå: " + weatherData.properties.timeseries[2].data.instant.details.air_pressure_at_sea_level + " hPa"
        document.getElementById('d3_at').innerHTML="Lufttemperatur: " + weatherData.properties.timeseries[2].data.instant.details.air_temperature + "°C"
        document.getElementById('d3_caf').innerHTML="Skyområdefraksjon: " + weatherData.properties.timeseries[2].data.instant.details.cloud_area_fraction + "%"
        document.getElementById('d3_rh').innerHTML="Relativ fuktighet: " + weatherData.properties.timeseries[2].data.instant.details.relative_humidity + "%"
        document.getElementById('d3_wfd').innerHTML="Vind fra retning: " + weatherData.properties.timeseries[2].data.instant.details.wind_from_direction + "°"
        document.getElementById('d3_ws').innerHTML="Vindfart: " + weatherData.properties.timeseries[2].data.instant.details.wind_speed + " m/s"

        // dag 4
        document.getElementById('d4_apatsl').innerHTML="Lufttrykk ved havnivå: " + weatherData.properties.timeseries[3].data.instant.details.air_pressure_at_sea_level + " hPa"
        document.getElementById('d4_at').innerHTML="Lufttemperatur: " + weatherData.properties.timeseries[3].data.instant.details.air_temperature + "°C"
        document.getElementById('d4_caf').innerHTML="Skyområdefraksjon: " + weatherData.properties.timeseries[3].data.instant.details.cloud_area_fraction + "%"
        document.getElementById('d4_rh').innerHTML="Relativ fuktighet: " + weatherData.properties.timeseries[3].data.instant.details.relative_humidity + "%"
        document.getElementById('d4_wfd').innerHTML="Vind fra retning: " + weatherData.properties.timeseries[3].data.instant.details.wind_from_direction + "°"
        document.getElementById('d4_ws').innerHTML="Vindfart: " + weatherData.properties.timeseries[3].data.instant.details.wind_speed + " m/s"

        // dag 5
        document.getElementById('d5_apatsl').innerHTML="Lufttrykk ved havnivå: " + weatherData.properties.timeseries[4].data.instant.details.air_pressure_at_sea_level + " hPa"
        document.getElementById('d5_at').innerHTML="Lufttemperatur: " + weatherData.properties.timeseries[4].data.instant.details.air_temperature + "°C"
        document.getElementById('d5_caf').innerHTML="Skyområdefraksjon: " + weatherData.properties.timeseries[4].data.instant.details.cloud_area_fraction + "%"
        document.getElementById('d5_rh').innerHTML="Relativ fuktighet: " + weatherData.properties.timeseries[4].data.instant.details.relative_humidity + "%"
        document.getElementById('d5_wfd').innerHTML="Vind fra retning: " + weatherData.properties.timeseries[4].data.instant.details.wind_from_direction + "°"
        document.getElementById('d5_ws').innerHTML="Vindfart: " + weatherData.properties.timeseries[4].data.instant.details.wind_speed + " m/s"
        
        // dag 6
        document.getElementById('d6_apatsl').innerHTML="Lufttrykk ved havnivå: " + weatherData.properties.timeseries[5].data.instant.details.air_pressure_at_sea_level + " hPa"
        document.getElementById('d6_at').innerHTML="Lufttemperatur: " + weatherData.properties.timeseries[5].data.instant.details.air_temperature + "°C"
        document.getElementById('d6_caf').innerHTML="Skyområdefraksjon: " + weatherData.properties.timeseries[5].data.instant.details.cloud_area_fraction + "%"
        document.getElementById('d6_rh').innerHTML="Relativ fuktighet: " + weatherData.properties.timeseries[5].data.instant.details.relative_humidity + "%"
        document.getElementById('d6_wfd').innerHTML="Vind fra retning: " + weatherData.properties.timeseries[5].data.instant.details.wind_from_direction + "°"
        document.getElementById('d6_ws').innerHTML="Vindfart: " + weatherData.properties.timeseries[5].data.instant.details.wind_speed + " m/s"

        // dag 7
        document.getElementById('d7_apatsl').innerHTML="Lufttrykk ved havnivå: " + weatherData.properties.timeseries[6].data.instant.details.air_pressure_at_sea_level + " hPa"
        document.getElementById('d7_at').innerHTML="Lufttemperatur: " + weatherData.properties.timeseries[6].data.instant.details.air_temperature + "°C"
        document.getElementById('d7_caf').innerHTML="Skyområdefraksjon: " + weatherData.properties.timeseries[6].data.instant.details.cloud_area_fraction + "%"
        document.getElementById('d7_rh').innerHTML="Relativ fuktighet: " + weatherData.properties.timeseries[6].data.instant.details.relative_humidity + "%"
        document.getElementById('d7_wfd').innerHTML="Vind fra retning: " + weatherData.properties.timeseries[6].data.instant.details.wind_from_direction + "°"
        document.getElementById('d7_ws').innerHTML="Vindfart: " + weatherData.properties.timeseries[6].data.instant.details.wind_speed + " m/s"
    })
    .catch(error => console.error("ERROR: " + error.message));
}

//funksjon som tømmer input boksene og paragraf boksene
function clearInput(){
    document.getElementById('lat').value = "";
    document.getElementById('lon').value = "";
    document.getElementById('d1_apatsl').innerHTML=""
    document.getElementById('d1_at').innerHTML=""
    document.getElementById('d1_caf').innerHTML=""
    document.getElementById('d1_rh').innerHTML=""
    document.getElementById('d1_wfd').innerHTML=""
    document.getElementById('d1_ws').innerHTML=""
}