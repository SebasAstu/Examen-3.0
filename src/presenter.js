import sumar from "./sumador";

const textoTweet = document.querySelector("#texto-tweet");
//const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#tweet-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tweet = textoTweet.value;
  console.log(tweet)

  if (tweet=="")
  {
    alert("No se puede ingresar un Post sin texto")
  }
  else{
    div.innerHTML += "<p>" + tweet + "</p>";
  }

  
});
