const itemsContainer = document.getElementById("items-container");
const teaButton = document.getElementById("tea-button");
const cokeButton = document.getElementById("coke-button");
const alcoholButton = document.getElementById("alcohol-button");
let myMoney = 0;
let amoutMoney = 0;
const addMyMoney = document.getElementById("add-my-money");
const myMoneyDisplay = document.getElementById("my-money");
const addAmountMoney = document.getElementById("add-amount-money");
const amoutMoneyDisplay = document.getElementById("amount-money");
const change = document.getElementById("change");

const btnDisplay = function () {
  teaButton.disabled = false;
  cokeButton.disabled = false;
  alcoholButton.disabled = false;
  if (amoutMoney < 100) {
    teaButton.disabled = true;
  }
  if (amoutMoney < 130) {
    cokeButton.disabled = true;
  }
  if (amoutMoney < 150) {
    alcoholButton.disabled = true;
  }
};

addAmountMoney.onclick = () => {
  if (myMoney < 100) {
    return;
  }
  myMoney -= 100;
  amoutMoney += 100;
  myMoneyDisplay.textContent = myMoney;
  amoutMoneyDisplay.textContent = amoutMoney;
  btnDisplay();
};

addMyMoney.onclick = () => {
  myMoney += 1000;
  myMoneyDisplay.textContent = myMoney;
};

change.onclick = () => {
  myMoney += amoutMoney;
  amoutMoney = 0;
  amoutMoneyDisplay.textContent = amoutMoney;
  myMoneyDisplay.textContent = myMoney;
};

const createImage = (drink) => {
  let drinkImgSrc = "";
  switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg";
      break;
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png";
      break;
    case "alcohol":
      drinkImgSrc =
        "https://image.itmedia.co.jp/news/articles/2104/22/l_ts0153_zenkai01.jpg";
      break;
    default:
      drinkImgSrc =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  }
  const figure = document.createElement("figure");
  figure.classList.add("vending-machine__items-container__figure");
  const img = document.createElement("img");
  img.src = drinkImgSrc;
  img.classList.add("vending-machine__items-container__figure__img");
  figure.append(img);
  return figure;
};

teaButton.onclick = () => {
  amoutMoney -= 100;
  btnDisplay();
  amoutMoneyDisplay.textContent = amoutMoney;
  const image = createImage("tea");
  itemsContainer.append(image);
};
cokeButton.onclick = () => {
  amoutMoney -= 130;
  btnDisplay();
  amoutMoneyDisplay.textContent = amoutMoney;
  const image = createImage("coke");
  itemsContainer.append(image);
};
alcoholButton.onclick = () => {
  amoutMoney -= 150;
  btnDisplay();
  amoutMoneyDisplay.textContent = amoutMoney;
  const image = createImage("alcohol");
  itemsContainer.append(image);
};
