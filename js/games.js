const actionGames = document.querySelector(".action-games");
const adventureGames = document.querySelector(".adventure-games");
const sportsGames = document.querySelector(".sports-games");

const selectPrize = document.getElementById("filter");
const headers = document.querySelectorAll("h2");

const prizeContainer = document.getElementById("prize-container");

const buy = document.querySelector(".buy");
const url = "https://larsingeprojects.one/gamehub/wp-json/wc/store/products";


async function gameList() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        actionGames.innerHTML = "";
        adventureGames.innerHTML = "";
        sportsGames.innerHTML = "";
        prizeContainer.innerHTML = "";

         for (i = 0; i < 3; i++) {
                    headers[i].style.display = "block";
                }

                

        for (let i = 0; i < 20; i++) {
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
                                    <a href="products-specific.html?id=${results.id}"><img src="${results.images[0].src}" class="gamepicture" alt="Mass effect logo" />
                                    <h3 class="game info">${results.name}</h3>
                                    <p class="gameinfo info">${results.short_description}</p>
                                    <p>More about the game</p>
                                    <p id="price">${results.prices.price} kr</p></a>
                                    
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
                console.log(results);
        
                actionGames.innerHTML = "";
                adventureGames.innerHTML = "";
                sportsGames.innerHTML = "";
                
                for (i = 0; i < 3; i++) {
                    headers[i].style.display = "none";
                }
                

                if (event.target.value === "over 350 kr") {
                    prizeContainer.innerHTML = "";
                    for (i = 0; i < 9; i++) {
                        var number = parseInt(results[i].prices.price);
                        console.log((number));
                        
                        if (number > 350) {
                           
                            createHTML(results[i],prizeContainer); 
                        }
                    }
                }

                if (event.target.value === "below 350 kr") {
                    prizeContainer.innerHTML = "";
                    for (i = 0; i < 9; i++) {
                        var number = parseInt(results[i].prices.price);
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

selectPrize.addEventListener("change",filterPrize);

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

        
