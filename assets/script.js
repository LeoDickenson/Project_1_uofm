
var eventCity = [];
var artistSelect = document.querySelector("#userArtist");
var artistList = [];
var artist = document.querySelector("#artist-list");
var artistCount = document.querySelector("#artist-count");
var artistInput = document.querySelector("#submit");

function renderArtist() {
    artist.innerHTML ="";
    artistCount.textContent = artistList.length;

    for (var i = 0; i < artistList.length; i++) {
        var artistName = artistList[i];

        var li = document.createElement("li");
        li.textContent = artistName;
        li.setAttribute("data-index", i);
        
        var button = document.createElement("button");
        button.textContent = "Delete";

        li.appendChild(button);
        artist.appendChild(li);
        
    }
}

function init() {
    var storedArtist = JSON.parse(localStorage.getItem("artistList"));
    if (storedArtist !== null) {
        artistList = storedArtist;
        
    }
    renderArtist();
}

function storeArtist() {
    localStorage.setItem("artistList",JSON.stringify(artistList));
    
}

document.querySelector("#btn").addEventListener("click",function(event) {
    // event.preventDefault();
    console.log(artistSelect.value);
fetch("https://rest.bandsintown.com/artists/"+artistSelect.value+"/events?app_id=510&date=upcoming")
.then(function(response){
    return response.json();
})

.then(function(data){
 
    console.log(data);

    eventCity[0] = data[0].venue.city;
    document.querySelector("#eventCity1").textContent = eventCity[0];

    eventCity[1] = data[1].venue.city;
    document.querySelector("#eventCity2").textContent = eventCity[1];
  
    eventCity[2] = data[2].venue.city;
    document.querySelector("#eventCity3").textContent = eventCity[2];
 
    eventCity[3] = data[3].venue.city;
    document.querySelector("#eventCity4").textContent = eventCity[3];
 
    eventCity[4] = data[4].venue.city;
    document.querySelector("#eventCity5").textContent = eventCity[4];

    var artistText = artistSelect.value.trim()

    if (artistText === "") {
        return;
    }

    artistList.push(artistText);
    artistSelect.value = "";
    
    storeArtist();
    renderArtist();

})

})

init();

artist.addEventListener("click", function(event) {
var element = event.target;

if (element.matches("button") === true) {
  var index = element.parentElement.getAttribute("data-index");
  artistList.splice(index, 1);
  console.log(artistList);

  storeArtist();
  renderArtist();
}
});

document.querySelector("#eventArticle").addEventListener("click",function(e) {
    console.log(e.target.textContent);
    var userCity= e.target.textContent;

    fetch('https://api.openbrewerydb.org/breweries?by_city='+userCity+'&per_page=6')
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

document.querySelector("#brew-site5b").textContent = "Bob's Brews"
document.querySelector("#brew-site4b").textContent = "World's Best Brews"
document.querySelector("#brew-site3b").textContent = "Slick Brews"
document.querySelector("#brew-site2b").textContent = "Friendly Brews"
document.querySelector("#brew-site1b").textContent = "Brews By Betty"

document.querySelector("#eventCity5").textContent = "Bob's City"
document.querySelector("#eventCity4").textContent = "World's Best City"
document.querySelector("#eventCity3").textContent = "Slick City"
document.querySelector("#eventCity2").textContent = "Friendly City"
document.querySelector("#eventCity1").textContent = "City By Betty"
