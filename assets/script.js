// nuthin

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
