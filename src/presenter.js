import sumar from "./sumador";

const textoTweet = document.querySelector("#texto-tweet");
//const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#tweet-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tweet = textoTweet.value;

  div.innerHTML += "<p>" + tweet + "</p>";
});
