let phones = [];

function getValue() {
    let phone = {};
    const brand = document.getElementById("brand");
    const model = document.getElementById("model");
    const price = document.getElementById("price");
    const sale = document.getElementById("sale");

    phone.brand = brand.value;
    phone.price = +price.value;
    phone.model = model.value;

    phones.push(phone);
}

const add = document.getElementById("add");
add.addEventListener("click", ()=> {
    getValue();
});

const app = document.getElementById("app");
const basket = document.getElementById("basket");
const priceTotal = document.getElementById("priceTotal");
const rend = document.getElementById("rend");
let itemId = null;
let priceCount = 0;



document.addEventListener("dragstart", function(ev) {
    itemId = ev.target.id;
    console.log(itemId);
});

document.addEventListener("dragover", function(e) {
    e.preventDefault();
});

basket.addEventListener("drop", function(e) {
    const itemBlock = document.createElement("div");
    const title = document.createElement("p");
    title.innerHTML = `${phones[itemId].brand} ${phones[itemId].model} - ${phones[itemId].price}$`;
    itemBlock.appendChild(title);
    this.appendChild(itemBlock);
    priceCount+= phones[itemId].price;
    priceTotal.innerHTML = priceCount + "$";
})


function render(phones) {
    for(let i=0; i<phones.length; i++){
        const block = document.createElement("div");
        const phoneImage = document.createElement("img");
        const brand = document.createElement("h3");
        const model = document.createElement("h2");
        const price = document.createElement("p");

        phoneImage.setAttribute("src", "phone.jpeg");
        phoneImage.setAttribute("draggable", "false");
        brand.innerHTML = phones[i].brand;
        model.innerHTML = phones[i].model;
        price.innerHTML = `${phones[i].price}$`;

        block.setAttribute("class", "card");
        block.setAttribute("draggable", "true");
        block.setAttribute("id", i);
        block.appendChild(phoneImage);
        block.appendChild(brand);
        block.appendChild(model);
        block.appendChild(price);

        app.appendChild(block);
    }
}

rend.addEventListener("click", ()=> {
    render(phones);
});


// const btns = document.querySelectorAll("button");

// function render() {
//     let html = "";
//         for (let i=0; i < phones.length; i++) {
//             html+=
//             `<div id="phone" class="card" style="width: 15rem; display: flex; flex-wrap: nowrap;">
//                 <div class="card-body">
//                 <img src="phone.jpeg" class="card-img-top">
//                     <h5 class="card-title">${phones[i].brand}</h5>
//                     <p class="card-text">Model: ${phones[i].model}</p>
//                     <p class="card-text">Price: ${phones[i].price} USD</p>
//                     <p class="card-text">Sale: ${phones[i].sale} </p>
//                     <a href="#" class="btn btn-primary"> Купить </a>
//                     <button class="btn btn-primary" data-phoneid=${phones[i].brand}>Delete</button>
//                 </div>
//             </div>`;
//         }
    
//     const app = document.getElementById("app");
//     app.innerHTML = html;
//     }

