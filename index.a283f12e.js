const e=document.querySelector("#texto-tweet"),t=document.querySelector("#tweet-form"),o=document.querySelector("#resultado-div");t.addEventListener("submit",(t=>{t.preventDefault();const n=e.value;console.log(n),""==n?alert("No se puede ingresar un Post sin texto"):o.innerHTML+="<p>"+n+"</p>"}));
//# sourceMappingURL=index.a283f12e.js.map
