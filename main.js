import "./src/index.css";
import "./node_modules/flowbite/dist/flowbite.min.js";

const hamburgarBar = document.querySelector(".hamburgar");
const dropdownMenu = document.querySelector(".dropdown");
const closeButton = document.querySelector(".closeButton");
const cartButton = document.querySelector(".cartButton");

cartButton.addEventListener("click", () => {
  // console.log('clicked')
  dropdownMenu.classList.add("hidden");
});

hamburgarBar.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("hidden");
  } else dropdownMenu.classList.add("hidden");
});

closeButton.addEventListener("click", () => {
  console.log("clicked");
  dropdownMenu.classList.add("hidden");
});

// counter
const btnIncrease = document.querySelector(".btnIncrease");
const btnDecrease = document.querySelector(".btnDecrease");
const quantityCount = document.querySelector(".quantity");
const addToCartBtn = document.querySelector(".addToCartBtn");
const cartNotification = document.querySelector(".cartNotification");
const emptyCart = document.querySelector(".emptyCart");
const trashBtn = document.querySelector(".trashBtn");
const purchasedBox = document.querySelector(".purchasedBox");
const purchasedCaculate = document.querySelector(".purchasedCaculate");

let noticount = 0;

addToCartBtn.addEventListener("click", () => {
  cartNotification.classList.remove("h-0");
  noticount = amt;
  cartNotification.innerText = noticount;

  if (noticount === 0) {
    purchasedBox.classList.add("hidden");
    emptyCart.classList.remove("hidden");
  } else {
    purchasedBox.classList.remove("hidden");
    emptyCart.classList.add("hidden");
  }
});

// amt increase decrease
let amt = 0;
btnIncrease.addEventListener("click", () => {
  amt += 1;
  itemQuantity += 1;
  quantityCount.innerText = amt;
  // console.log(amt)
});

btnDecrease.addEventListener("click", () => {
  if (amt < 1) {
    amt = 0;
  } else {
    amt -= 1;
    itemQuantity -= 1;
  }
  quantityCount.innerText = amt;
  // console.log(amt)
});
const originPrice = 125;
let itemQuantity = amt;
let totalPrice = originPrice * itemQuantity;
addToCartBtn.addEventListener("click", () => {
  purchasedCaculate.textContent =
    "$125.00" + " x " + itemQuantity + " = " + "$" + totalPrice + ".00";
});

// Trash Btn
trashBtn.addEventListener("click", () => {
  quantityCount.innerText = 0;
  cartNotification.innerText = 0;
  amt = 0;
  purchasedBox.classList.add("hidden");
  emptyCart.classList.remove("hidden");
});
