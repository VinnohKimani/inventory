fetch("http://localhost:3000/items", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function renderItems(items) {
  const itemListDiv = document.getElementById("item-list");
  itemListDiv.innerHTML = "";

  items.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.textContent = item.name;
    itemListDiv.appendChild(itemContainer);
  });
}
