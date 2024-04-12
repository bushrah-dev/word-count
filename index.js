let buttonEl = document.getElementById("btn")
let cardEl = document.querySelector(".card")

buttonEl.addEventListener("click", function(){
    let count = document.querySelector(".count").value
    cardEl.innerHTML = count.length
})