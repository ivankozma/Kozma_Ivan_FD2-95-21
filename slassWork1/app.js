const phone = [
    {
      model: "Apple",
      imgUrl:"aplle.jpg",
      color: "white",
      descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequuntur quis velit aut facere exercitationem vel reprehenderit ab quibusdam possimus. Enim soluta qui itaque saepe, maiores doloremque aperiam dolorem a?",
      price: 200,
      sale: true
    },
    {
      model: "Samsung",
      imgUrl:"samsung.jpg",
      color: "red",
      descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequuntur quis velit aut facere exercitationem vel reprehenderit ab quibusdam possimus. Enim soluta qui itaque saepe, maiores doloremque aperiam dolorem a?",
      price: 300,
      sale: false
    },
    {
      model: "Xiaomi",
      imgUrl:"Xiaomi.jpg",
      color: "red",
      descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequuntur quis velit aut facere exercitationem vel reprehenderit ab quibusdam possimus. Enim soluta qui itaque saepe, maiores doloremque aperiam dolorem a?",
      price: 400,
      sale: true
    }
  ];

let html = "";

for (let i=0; i < phone.length; i++) {
    html+=
    `<div class="card">
        <img src="${phone[i].imgUrl}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${phone[i].model}</h5>
            <p class="card-text">${phone[i].color}</p>
            <p class="card-text">${phone[i].description}</p>
            <a style ="color:red" href="#" class="btn btn-primary">${phone[i].sale}</a>
            <a style ="color:red" href="#" class="btn btn-primary">${phone[i].sale}</a>
        </div>
    <div>`;

    html+=phone[i].sale ? `<a href="#" class="btn btn-primary"> Купить </a>` : "";

}

const app = document.getElementById("app");
app.innerHTML = html;



