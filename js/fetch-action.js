const games = document.querySelector(".games");
const url = "http://larsingeprojects.one/gamehub/wp-json/wc/store/products";

async function gameList() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        games.innerHTML = "";

        for (let i = 0; i < 5; i++) {
                games.innerHTML += `<div class="clearfix">
                                    <a href=""></a><img src="${results[i].images[0].src}" class="gamepicture" alt="Mass effect logo" /></a>
                                    <h3 class="game info">${results[i].name}</h3>
                                    <p class="gameinfo info">Console name - Release date - Genre</p>
                                    <p>Information about the game.</p>
                                    <p>Price<a href="" class="cart">Put in Cart</a></p>
                                   </div>`
        }
    }
    catch(error) {
        console.log(error);
    }
}

gameList();