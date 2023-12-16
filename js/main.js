var div  = document.querySelector(".div");
var upBtn = document.querySelector(".up");
var downBtn = document.querySelector(".down");

upBtn.addEventListener("click", function(){
    div.style.transform = "translateY(calc(-300%))"
})

downBtn.addEventListener("click", function(){
    div.style.transform = "translateY(calc(300%))"
})


