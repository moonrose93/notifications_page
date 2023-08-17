const personOne = document.getElementById("num-one");
const personTwo = document.getElementById("num-two");
const personThree = document.getElementById("num-three");
const message = document.getElementById("message");
const btnEl = document.getElementById("mark-all-as-read");

//Circles

const circleOne = document.getElementById("circle");
const circleTwo = document.getElementById("circle2");
const circleThree = document.getElementById("circle3");

btnEl.addEventListener("click",()=>{
 personOne.style.backgroundColor = "white" ;
 personTwo.style.backgroundColor = "white" ;
 personThree.style.backgroundColor = "white" ;
 message.style.backgroundColor = "white" ;

 circleOne.style.display = "none";
 circleTwo.style.display = "none";
 circleThree.style.display = "none";

})