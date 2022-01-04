
fetch("https://rest.bandsintown.com/artists/Justin%20Beiber?app_id=510")
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);
})

fetch("https://rest.bandsintown.com/artists/Maroon%205/events?app_id=510&date=upcoming")
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);
})

// function getApi() {

//     var requestUrl = 'https://api.openbrewerydb.org/breweries?by_city=minneapolis&per_page=10';

//     fetch(requestUrl)
//         .then(function(response) {
//             return response.json();;
//         })
    
//     }

// var icon = "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
// var temp = Math.floor(data.main.temp);
// var wind = data.wind.speed;
// var humidity = data.main.humidity;
// var description = data.weather[0].description;
// var userCity = data.name;

// $("#weatherDescription").append(description);
// $("#icon").attr("src", icon);
// $("#temp").append("Temp " + temp + " °F");
// $("#wind").append("Wind " + wind + " MPH");
// $("#humidity").append("Humidity " + humidity + "%");
// $("#city").append(userCity);
// })


document.getElementByID(".btn").addEventListener("click",function() {

    fetch('https://api.openbrewerydb.org/breweries?by_city=Minneapolis&per_page=5')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            var brewery = data[0].name;
            // console.log(brewery);

        })
        
    })  
    