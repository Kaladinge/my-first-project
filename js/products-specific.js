const container = document.querySelector(".container")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const nameValue = params.get("id");

console.log(nameValue);

const url = "https://larsingeprojects.one/gamehub/wp-json/wc/store/products/" + nameValue;

async function findInfo() {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    container.innerHTML = `
                        <img src="${result.images[0].src}" class="image" alt="">
                        <div class="text">
                            <h1 class="header">${result.name}</h1>
                            <p>${result.short_description}</p>
                            <h2 class="price">${result.prices.price} kr</h2><a href="" class="cart">Put in Cart</a>
                            <p class="description">${result.description}</p>
                        </div>
                        `
}

findInfo();