const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const headerSale = document.querySelector(".header-sale");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const nameValue = params.get("id");

console.log(nameValue);

const url = "https://larsingeprojects.one/gamehub/wp-json/wc/store/products/" + nameValue;

const url2 = "https://larsingeprojects.one/gamehub/wp-json/wc/store/products";

async function findInfo() {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    container.innerHTML = `
                        <img src="${result.images[0].src}" class="image" alt="">
                        <div class="text">
                            <h1 class="header">${result.name}</h1>
                            <p>${result.short_description}</p>
                            <h1 class="price">${result.prices.price} kr</h1><a href="" class="cart">Put in Cart</a>
                            <p class="description">${result.description}</p>
                        </div>
                        `
    
    const responses2 = await fetch(url2);
    const results2 = await responses2.json();
    console.log(results2);

    headerSale.innerHTML = `<h3>People who bought this game also looked at:</h3>`;

    let x = 0;

    for (i = 0; i < 5; i++) {

        if (x === 3) {
            break;
        }

    
        if (results2[i].categories[0].name === result.categories[0].name) {
                continue;
            } 
        

        container2.innerHTML += `
                                <div class="flex">
                                <a href="products-specific.html"><img src="${results2[i].images[0].src}" class="image2" alt="">
                                <h3>${results2[i].name}</h3>
                                <p>${results2[i].short_description}</p>
                                <h3>${results2[i].prices.price} kr</h3></a>
                                </div>`;

    x = x + 1;
                                
    }
}

findInfo();