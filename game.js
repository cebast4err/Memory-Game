const grid = document.querySelector(".grid");
const container_end = document.querySelector(".container-end");
const body = document.querySelector("body");

const valueRascued = sessionStorage.getItem("type");
const valueTimer = document.querySelector("#time1 > p");
const valueTimer2 = document.querySelector("#time2 > p");

const iconPause = document.querySelector(".pause-icon");
const iconPauseI = document.querySelector("#icon");

const containerPause = document.querySelector(".container-pause");

let pausado = true;

const cardsGame = [
  "anao",
  "area",
  "cmdr-irma",
  "daen",
  "dragon",
  "drogo",
  "gordin",
  "irma-sb",
  "jofrey",
  "jon",
];
const cardsHarry = [
  "doubledore",
  "hagrid",
  "hermione",
  "honald",
  "prof-oculos",
  "severus",
  "velha",
  "voldemort",
  "draco",
  "dobby",
];
const cardsHora = [
  "fin",
  "jake",
  "beemo",
  "caroço",
  "fogo",
  "jujuba",
  "pinguim",
  "lemon",
  "marceline",
  "rei-gelado",
];

const createElement = (tag, classN) => {
  const element = document.createElement(tag);
  element.className = classN;
  return element;
};

iconPause.addEventListener("click", () => {
  const iconPauseI = iconPause.querySelector("i");

  if (containerPause.style.display === "flex") {
    containerPause.style.display = "none";
    iconPauseI.classList.add("fa-pause");
    iconPauseI.classList.remove("fa-play");

    this.loop = setInterval(() => {
      const time = +valueTimer.innerHTML;
      if (time <= 8) {
        valueTimer.innerHTML = `0${time + 1}`;
      } else {
        valueTimer.innerHTML = time + 1;
      }
    }, 1000);
  } else {
    containerPause.style.display = "flex";
    pausado = false;
    if (!pausado) {
      clearInterval(this.loop);
    }
    iconPauseI.classList.add("fa-play");
    iconPauseI.classList.remove("fa-pause");
  }
});

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
  const disableCards = document.querySelectorAll(".saturateCard");

  if (disableCards.length === 20) {
    container_end.style.display = "flex";
    clearInterval(this.loop);
    valueTimer2.innerHTML = valueTimer.innerHTML;
    iconPause.style.display = "none";
  }
};

const checkCard = (first, second) => {
  const chac1 = first.getAttribute("data-character");
  const chac2 = second.getAttribute("data-character");

  if (chac1 === chac2) {
    first.firstChild.classList.add("saturateCard");
    second.firstChild.classList.add("saturateCard");
    firstCard = "";
    secondCard = "";
    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("revealCard");
      secondCard.classList.remove("revealCard");
      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("revealCard")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("revealCard");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("revealCard");
    secondCard = target.parentNode;

    checkCard(firstCard, secondCard);
  }
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  card.appendChild(front);
  card.appendChild(back);

  card.setAttribute("data-character", character);
  card.addEventListener("click", revealCard);

  return card;
};

const namePlayer = document.querySelector("#name");

const loadGame = () => {
  const duplicateGame = [...cardsGame, ...cardsGame];
  const duplicateHora = [...cardsHora, ...cardsHora];
  const duplicateHarry = [...cardsHarry, ...cardsHarry];

  const sortCardsGame = duplicateGame.sort(() => Math.random() - 0.5);
  const sortCardsHora = duplicateHora.sort(() => Math.random() - 0.5);
  const sortCardsHarry = duplicateHarry.sort(() => Math.random() - 0.5);

  if (valueRascued === "box-image1") {
    body.classList.add("type_body1");
    sortCardsGame.forEach((cards) => {
      const card = createCard(cards);
      const front = card.querySelector(".front");
      const back = card.querySelector(".back");
      front.style.backgroundImage = `url("./images/got/${cards}.jpg")`;
      back.style.backgroundImage = `url("./images/got/teste2.jpge")`;
      grid.appendChild(card);
    });
  } else if (valueRascued === "box-image2") {
    body.style.backgroundColor = "rgb(133, 217, 250)";
    sortCardsHora.forEach((cards) => {
      const card = createCard(cards);
      const front = card.querySelector(".front");
      const back = card.querySelector(".back");
      front.style.backgroundImage = `url("./images/hora/${cards}.jpg")`;
      back.style.backgroundImage = `url("./images/hora/teste.jpge")`;
      grid.appendChild(card);
    });
  } else if (valueRascued === "box-image3") {
    body.classList.add("type_body3");
    sortCardsHarry.forEach((cards) => {
      const card = createCard(cards);
      const front = card.querySelector(".front");
      const back = card.querySelector(".back");
      front.style.backgroundImage = `url("./images/harry/${cards}.jpg")`;
      back.style.backgroundImage = `url("./images/harry/back_card.jpge")`;
      grid && grid.appendChild(card);
    });
  }
};
const setTimer = () => {
  if (pausado) {
    this.loop = setInterval(() => {
      const time = +valueTimer.innerHTML;
      if (time <= 8) {
        valueTimer.innerHTML = `0${time + 1}`;
      } else {
        valueTimer.innerHTML = time + 1;
      }
      if (!pausado) {
        clearInterval(this.loop);
      }
    }, 1000);
  }
};
window.onload = () => {
  namePlayer.innerHTML = localStorage.getItem("player");

  loadGame();
  setTimer();
};
createCard();
