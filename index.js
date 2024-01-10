const input_name = document.querySelector(".name-input");
const button_name = document.querySelector(".button-name");
const form = document.querySelector(".form-name");

const validateInput = ({ target }) => {
  console.log(target.value);
  if (target.value.length > 2) {
    button_name.removeAttribute("disabled");
    return;
  }
  button_name.setAttribute("disabled", "");
};

const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem("player", input_name.value);
  window.location = "choose.html";
};

input_name && input_name.addEventListener("input", validateInput);
form && form.addEventListener("submit", handleSubmit);

// choose part

const boss_choose = document.querySelector(".box-choose");

boss_choose &&
  boss_choose.addEventListener("click", (e) => {
    sessionStorage.setItem("type", e.target.classList.value);
    window.location = "game.html";
  });

document
  .querySelector(".box-image1")
  .addEventListener("mouseenter", function () {
    document.body.classList.add("image-hovered");
  });

document
  .querySelector(".box-image1")
  .addEventListener("mouseleave", function () {
    document.body.classList.remove("image-hovered");
  });
document
  .querySelector(".box-image2")
  .addEventListener("mouseenter", function () {
    document.body.classList.add("image-hovered2");
  });

document
  .querySelector(".box-image2")
  .addEventListener("mouseleave", function () {
    document.body.classList.remove("image-hovered2");
  });
document
  .querySelector(".box-image3")
  .addEventListener("mouseenter", function () {
    document.body.classList.add("image-hovered3");
  });

document
  .querySelector(".box-image3")
  .addEventListener("mouseleave", function () {
    document.body.classList.remove("image-hovered3");
  });

document.querySelector("#left-arrow").addEventListener("click", () => {
  window.location = "index.html";
});
