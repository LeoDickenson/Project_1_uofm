
// var eventCity = fetch("https://rest.bandsintown.com/artists/Maroon%205/events?app_id=510&date=upcoming")
// .then(function(response){
//     return response.json();
//     console.log(eventCity);
// })

// .then(function(data){
//     console.log(data);

//     var city = data[0].venue.city;
// });

var eventCity = '';
document.querySelector("#btn").addEventListener("click",function() {
fetch("https://rest.bandsintown.com/artists/justin beiber/events?app_id=510&date=upcoming&per_page=5")
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);

    eventCity = data[0].venue.city;
    document.querySelector("#eventCity1").textContent = eventCity;
    eventCity = data[1].venue.city;
    document.querySelector("#eventCity2").textContent = eventCity;
    eventCity = data[2].venue.city;
    document.querySelector("#eventCity3").textContent = eventCity;
    eventCity = data[3].venue.city;
    document.querySelector("#eventCity4").textContent = eventCity;
    eventCity = data[4].venue.city;
    document.querySelector("#eventCity5").textContent = eventCity;
    console.log(eventCity);

})
})

document.querySelector("#eventCity1").addEventListener("click",function() {
    console.log(eventCity);
    fetch('https://api.openbrewerydb.org/breweries?by_city='+eventCity+'&per_page=6')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            
            var brewery = data[0].name;
            var website = data[0].website_url;
            // console.log(brewery);

            document.querySelector("#brew-site1b").textContent = brewery;
            document.querySelector("#brew-site1b").setAttribute("href", website);

            var brewery = data[5].name;
            var website = data[5].website_url;

            document.querySelector("#brew-site2b").textContent = brewery;
            document.querySelector("#brew-site2b").setAttribute("href", website);


            var brewery = data[2].name;
            var website = data[2].website_url;

            document.querySelector("#brew-site3b").textContent = brewery;
            document.querySelector("#brew-site3b").setAttribute("href", website);

            var brewery = data[3].name;
            var website = data[3].website_url;

            document.querySelector("#brew-site4b").textContent = brewery;
            document.querySelector("#brew-site4b").setAttribute("href", website);

            var brewery = data[4].name;
            var website = data[4].website_url;

            document.querySelector("#brew-site5b").textContent = brewery;
            document.querySelector("#brew-site5b").setAttribute("href", website);
        })
        
    })  