let date = document.querySelector("#date");
let voting = document.querySelector("#votebutton");
let votingform = document.querySelector("#votingform");
let remove = document.querySelector("#remove");

let today = new Date();

voting.addEventListener("click", e =>{
    e.preventDefault();
    votingform.style.display = "block";
});

remove.addEventListener("click", e =>{
    e.preventDefault();
    votingform.style.display = "none";
});


let li = document.createElement("li");
date.appendChild(li);
li.textContent = today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear();