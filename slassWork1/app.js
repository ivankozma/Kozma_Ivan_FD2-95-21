const phone = [
    {
      model: "Apple",
      imgUrl:"apple.jpeg",
      color: "white",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequuntur quis velit aut facere exercitationem vel reprehenderit ab quibusdam possimus.?",
      price: 200,
    },
    {
      model: "Samsung",
      imgUrl:"samsung.jpeg",
      color: "red",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequuntur quis velit aut facere exercitationem vel reprehenderit ab quibusdam possimus.",
      price: 300,
    },
    {
      model: "Xiaomi",
      imgUrl:"xiaomi.jpeg",
      color: "red",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequuntur quis velit aut facere exercitationem vel reprehenderit ab quibusdam possimus.",
      price: 400,
    }
  ];

let html = "";

for (let i=0; i < phone.length; i++) {
    html+=
    `<div class="card" style="width: 18rem">
        <img src="${phone[i].imgUrl}" height="150" width="100">
        <div class="card-body">
            <h5 class="card-title">${phone[i].model}</h5>
            <p class="card-text">Color: ${phone[i].color}</p>
            <p class="card-text">Description: ${phone[i].description}</p>
            <p class="card-text">Price: ${phone[i].price} USD</p>
            <a href="#" class="btn btn-primary"> Купить </a>
        </div>
    <div>`;
}

const app = document.getElementById("app");
app.innerHTML = html;



