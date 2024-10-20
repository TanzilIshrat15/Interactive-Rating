document.addEventListener("DOMContentLoaded", () => {
var button1 = document.querySelector(".submit")
var rating = document.querySelector(".page1")
var thankyou = document.querySelector(".container2")
var head = document.querySelectorAll(".head > div")
var ratings =  document.querySelector("#rate")



let rate = null;


button1.addEventListener("click",() =>{
    if (rate){
        ratings.textContent = rate;
        rating.classList.add("hidden")
        thankyou.classList.remove("hidden")
    
    }
    
})


head.forEach(num => {
    num.addEventListener("click", ()=>{
        console.log("head clicked");
        rate = num.textContent;
        console.log(rate);
    });
});
});


