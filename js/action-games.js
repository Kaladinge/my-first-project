const games = document.querySelector(".games");
const url = "http://larsingeprojects.one/gamehub/wp-json/wc/store/products";

async function gameList() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
    }
    catch(error) {
        console.log(error);
    }
}

gameList();