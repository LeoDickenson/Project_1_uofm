
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



document.querySelector("#btn").addEventListener("click",function() {

    fetch('https://api.openbrewerydb.org/breweries?by_city=Minneapolis&per_page=5')
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

            var brewery = data[1].name;
            var website = data[1].website_url;

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
    