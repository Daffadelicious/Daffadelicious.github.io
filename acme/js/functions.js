// Functions for the ACME site

// Link to json file
let dataURL = "/acme/js/acme.json";

// Call fetchData function
fetchData(dataURL);

function fetchData(dataURL){
    fetch(dataURL)
    .then(function(response) {
        if(response.ok){
            return response.json();
        }
        throw new ERROR('Network response was not OK.');
    })
    .then(function(data){
        // Check the data object that was retrieved
        console.log("From the fetchData function: ")
        console.log(data);

        // Create an array to hold nav items
        let navItems = [];
        for(let i=0; i<data.Navigation.name.length; i++){
            navItems[i] = data.Navigation.name[i];
        }
        
        // Call fillNav function
        fillNav(navItems);
    })
}

function fillNav(navItems){
    let ul = document.getElementById("navUl");
        // Create and fill nav items
        for(let i = 0; i < navItems.length; i++){
            let li = document.createElement("li");
            let text = document.createTextNode(navItems[i]);
            li.appendChild(text);
            li.setAttribute("id", "nav" + navItems[i]);
            ul.appendChild(li);
        }
    // Call clickListeners function
    clickListeners(navItems);
}

function clickListeners(items){
    // When Home is clicked, call clickHome() function
    document.getElementById("navHome").addEventListener("click", clickHome);

    // When Anvils is clicked, call navClick() function and pass "1"
    let anvils = document.querySelector("#navAnvils");
    anvils.addEventListener("click", navClick);
    anvils.myParam = "Anvils";

    // When Explosives is clicked, call navClick() function and pass "2"
    let explosives = document.querySelector("#navExplosives");
    explosives.addEventListener("click", navClick); 
    explosives.myParam = "Explosives";

    // When Decoys is clicked, call navClick() function and pass "3"
    let decoys = document.querySelector("#navDecoys");
    decoys.addEventListener("click", navClick);
    decoys.myParam = "Decoys";

    // When Traps is clicked, call navClick() function and pass "4"
    let traps = document.querySelector("#navTraps");
    traps.addEventListener("click", navClick);
    traps.myParam = "Traps";
}

// Functions for each nav clicked
function clickHome(){
    // Remove hide class from home page
    document.getElementById("home").setAttribute("class", "");
    document.getElementById("item").setAttribute("class", "hide");

    console.log("Home page displayed");
}

function navClick(event){
    fetchData(dataURL);
    function fetchData(dataURL){
        fetch(dataURL)
        .then(function(response) {
            if(response.ok){
                return response.json();
            }
            throw new ERROR('Network response was not OK.');
        })
        .then(function(data){

            // Hide home page and show item page
            document.getElementById("home").setAttribute("class", "hide");
            document.getElementById("item").setAttribute("class", "");

            // Set o to data.event's parameter passed from click event (Explosives, Traps, etc)
            let o = data[event.target.myParam];
            console.log("User clicked " + event.target.myParam);

            document.getElementById("itemHeader").innerHTML = o.name;
            document.getElementById("itemPicture").setAttribute("src", o.path);
            document.getElementById("description").innerHTML = o.description;
            document.getElementById("manufacturer").innerHTML = o.manufacturer;
            document.getElementById("stars").innerHTML = o.reviews + "/5 stars";
            document.getElementById("price").innerHTML = "Price: $" + o.price;
        })
    }
}