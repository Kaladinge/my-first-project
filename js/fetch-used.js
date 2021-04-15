const games = document.querySelector(".games");
const buy = document.querySelector(".buy");
const url = "https://larsingeprojects.one/gamehub/wp-json/wc/store/products";

async function gameList() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        games.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            
                createHTML(results[i]);
        }
    }
    catch(error) {
        console.log(error);
    }
}

gameList();

function createHTML(results) {
        games.innerHTML += `<div class="clearfix click-area">
                                    <a href="products-specific.html?id=${results.id}"><img src="${results.images[0].src}" class="gamepicture" alt="Mass effect logo" />
                                    <h3 class="game info">${results.name}</h3>
                                    <p class="gameinfo info">Console name - Release date - Genre</p>
                                    <p>Information about the game.</p>
                                    <p>${results.prices.price} kr</p></a>
                                   </div>`


        buy.innerHTML += `<div class="buy-button">
                                <a href="" class="cart">Put in Cart</a>
                        </div>`
        
        }
        const cart = document.querySelectorAll(".cart");
        