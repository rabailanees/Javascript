// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor="green"

// document.getElementById("red").style.backgroundColor= "red"
// document.querySelector(".box").style.backgroundColor= "red"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor= "red";
})