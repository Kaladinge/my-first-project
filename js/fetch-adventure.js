const games = document.querySelector(".games");
const url = "http://larsingeprojects.one/gamehub/wp-json/wc/store/products";

async function gameList() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        games.innerHTML = "";

        for (let i = 0; i < 8; i++) {
            if (results[i].categories[0].name != "Adventure") {
                continue;
            } 
                createHTML(results[i]);
        }
    }
    catch(error) {
        console.log(error);
    }
}

gameList();

function createHTML(results) {
        games.innerHTML += `<div class="clearfix">
                                    <a href=""></a><img src="${results.images[0].src}" class="gamepicture" alt="Mass effect logo" /></a>
                                    <h3 class="game info">${results.name}</h3>
                                    <p class="gameinfo info">Console name - Release date - Genre</p>
                                    <p>Information about the game.</p>
                                    <p>${results.prices.price} kr<a href="" class="cart">Put in Cart</a></p>
                                   </div>`
        }