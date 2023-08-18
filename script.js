const personOne = document.getElementById("num-one");
const personTwo = document.getElementById("num-two");
const personThree = document.getElementById("num-three");
const personOneMobile = document.getElementById("num-one-mobile");
const personTwoMobile = document.getElementById("num-two-mobile");
const personThreeMobile = document.getElementById("num-three-mobile");
const message = document.getElementById("message");
const btnEl = document.getElementById("mark-all-as-read");
const number = document.getElementById("number");
//Circles-desktop

const circleOne = document.getElementById("circle");
const circleTwo = document.getElementById("circle2");
const circleThree = document.getElementById("circle3");

//Crcles -mobile

const circleOneMobile = document.getElementById("circle-mobile");
const circleTwoMobile= document.getElementById("circle2-mobile");
const circleThreeMobile = document.getElementById("circle3-mobile");


btnEl.addEventListener("click",()=>{
 personOne.style.backgroundColor = "white" ;
 personTwo.style.backgroundColor = "white" ;
 personThree.style.backgroundColor = "white" ;
 message.style.backgroundColor = "white" ;
 personOneMobile.style.backgroundColor = "white";
 personTwoMobile.style.backgroundColor = "white";
 personThreeMobile.style.backgroundColor="white";
 number.innerText = "0"

 circleOne.style.display = "none";
 circleTwo.style.display = "none";
 circleThree.style.display = "none";

 
 circleOneMobile.style.display = "none";
 circleTwoMobile.style.display = "none";
 circleThreeMobile.style.display = "none";

})
