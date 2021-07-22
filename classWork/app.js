let phones = [];

function getValue() {
    let phone = {};
    const brand = document.getElementById("brand");
    const model = document.getElementById("model");
    const price = document.getElementById("price");
    const sale = document.getElementById("sale");

    phone.brand = brand.value;
    phone.price = price.value;
    phone.model = model.value;
    phone.sale = sale.value;

    phones.push(phone);

}
const add = document.getElementById("add");
add.addEventListener("click", ()=> {
    getValue();
});


function render() {
let html = "";
    for (let i=0; i < phones.length; i++) {
        html+=
        `<div id="phone" class="card" style="width: 15rem; display: flex; flex-wrap: nowrap;">
            <div class="card-body">
            <img src="phone.jpeg" class="card-img-top">
                <h5 class="card-title">${phones[i].brand}</h5>
                <p class="card-text">Model: ${phones[i].model}</p>
                <p class="card-text">Price: ${phones[i].price} USD</p>
                <p class="card-text">Sale: ${phones[i].sale} </p>
                <a href="#" class="btn btn-primary"> Купить </a>
                <button class="btn btn-primary" data-phoneid=${phones[i].brand}>Delete</button>
            </div>
        </div>`;
    }

const app = document.getElementById("app");
app.innerHTML = html;
}

const rend = document.getElementById("rend");
rend.addEventListener("click", ()=> {
    render();
});

// const phone = document.getElementById("phone");
// let str = "";
// for (let i=0; i<phone.length; i++) {
//     str+= `<button class="btn btn-primary" data-phoneid=${phone[i].id}>Delete</button>`;
// }


const btns  = document.querySelectorAll("button");


// btns.forEach((btn, indx) => {
//     btn.addEventListener("click", function(e) {
//         console.log(e.target.dataset.phoneid);
//     })
// })



// window.addEventListener("click", function(e){
//     console.log(e.target.dataset.phoneid);
// })
// const app = document.getElementById("app");
// app.innerHTML = str;

