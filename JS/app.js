let date = document.querySelector("#date");

let today = new Date();


let li = document.createElement("li");
date.appendChild(li);
li.textContent = today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear();