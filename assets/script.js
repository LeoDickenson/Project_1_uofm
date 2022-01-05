
// fetch("https://rest.bandsintown.com/artists/Justin%20Beiber?app_id=510")
// .then(function(response){
//     return response.json();
// })

// .then(function(data){
//     console.log(data);
// })

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

fetch('https://api.openbrewerydb.org/breweries?by_city=minneapolis&per_page=5')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
