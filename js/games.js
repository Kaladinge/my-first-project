const actionGames = document.querySelector(".action-games");
const adventureGames = document.querySelector(".adventure-games");
const sportsGames = document.querySelector(".sports-games");

const selectPrize = document.getElementById("filter");
const selectPlatform = document.getElementById("filter2");

const headers = document.querySelectorAll("h2");

const prizeContainer = document.getElementById("prize-container");

const buy = document.querySelector(".buy");
/*const url = "https://larsingeprojects.one/gamehub/wp-json/wc/store/products";*/
const url = "https://larsingeprojects.one/gamehub/wp-json/wc/v3/products?consumer_key=ck_736a45854e6944a9517646f1a0c4b101c6f414f2&consumer_secret=cs_5ce5846ef8b56b3123cbc6f6a2f577de0f82be33";


async function gameList() {
    try {
        const response = await fetch(url);
        const results = await response.json();


        actionGames.innerHTML = "";
        adventureGames.innerHTML = "";
        sportsGames.innerHTML = "";
        prizeContainer.innerHTML = "";

         for (i = 0; i < 4; i++) {
                    headers[i].style.display = "block";
                }

                headers[1].style.display = "none";

        for (let i = 0; i < 9; i++) {
            if (results[i].categories[0].name == "Action") {
                createHTML(results[i],actionGames);
            } 

            if (results[i].categories[0].name == "Adventure") {
                createHTML(results[i],adventureGames);
            } 

            if (results[i].categories[0].name == "Sports") {
                createHTML(results[i],sportsGames);
            } 
           
           const buttons = document.querySelectorAll(".buy-button");
        }
    }
    catch(error) {
        console.log(error);
    }
}

gameList();

function createHTML(results,gamecategory) {
        gamecategory.innerHTML += `<div class="clearfix click-area">
                                <div class="text">
                                        <a href="products-specific.html?id=${results.id}"><img src="${results.images[0].src}" class="gamepicture" alt="Mass effect logo" />
                                        
                                            <h3 class="header">${results.name}</h3>
                                            <p class="short-info">${results.short_description}</p>
                                            <p class="more">More about the game</p>
                                            </div>
                                            <p id="price">${results.price} kr</p></a>
                                        
                                        <div class="buy-button">
                                            <a href="" class="cart">Put in Cart</a>
                                        </div>
                                    </div>`  
                            
}


function filterPrize(event) {

    if (event.target.value === "all prizes") {
        gameList();
    }
    
    else {

        async function games() {
            
                const response = await fetch(url);
                const results = await response.json();
        
                actionGames.innerHTML = "";
                adventureGames.innerHTML = "";
                sportsGames.innerHTML = "";
                
                for (i = 0; i < 4; i++) {
                    headers[i].style.display = "none";
                }
                

                if (event.target.value === "over 350 kr") {
                    prizeContainer.innerHTML = "";
                    for (i = 0; i < 9; i++) {
                        var number = parseInt(results[i].price);
                        console.log((number));
                        
                        if (number > 350) {
                           
                            createHTML(results[i],prizeContainer); 
                        }
                    }
                }

                if (event.target.value === "below 350 kr") {
                    prizeContainer.innerHTML = "";
                    for (i = 0; i < 9; i++) {
                        var number = parseInt(results[i].price);
                        console.log((number));
                        
                        if (number <= 350) {
                            
                            createHTML(results[i],prizeContainer); 
                        }
                    }
                }
                console.log(event.target.value);
}
games();
}
}


function filterPlatform(event) {
    if (event.target.value === "all platforms") {
        gameList();
    }
    
    else {

        async function games2() {
                
                const response = await fetch(url);
                const results = await response.json();
                console.log(results);
        
                actionGames.innerHTML = "";
                adventureGames.innerHTML = "";
                sportsGames.innerHTML = "";

                
                
                for (i = 0; i < 4; i++) {
                    headers[i].style.display = "none";
                }
                headers[1].style.display = "block";
                headers[1].innerHTML = event.target.value;
                
                checkPlatform(event,"Nintendo Switch",prizeContainer,results);
                checkPlatform(event,"Playstation 4",prizeContainer,results);
                checkPlatform(event,"PC",prizeContainer,results);
                checkPlatform(event,"Nintendo Gamecube",prizeContainer,results);
                checkPlatform(event,"NES",prizeContainer,results);
                checkPlatform(event,"Nintendo 64",prizeContainer,results);
                
            }
                games2();
        }   
        
    }

 function checkPlatform(event,menuValue,container,results) {
if (event.target.value === menuValue) {

                    container.innerHTML = "";
                    for (i = 0; i < 9; i++) {
                        
                        if (results[i].tags[0].name === menuValue) {
                            createHTML(results[i],container); 
                        }
                    }      
    }
}

function cartFunctions(gametype) {
document.getElementById(gametype).addEventListener('click',function(event){
               
        if (event.target && event.target.classList.value === "cart") {
            event.preventDefault();
          
          addToCart(event);
          }    
 });}

cartFunctions("action-games");
cartFunctions("adventure-games");
cartFunctions("sports-games");

selectPrize.addEventListener("change",filterPrize);
selectPlatform.addEventListener("change",filterPlatform);
