let date = document.querySelector("#date");
let voting = document.querySelector("#votebutton");
let votingform = document.querySelector("#votingform");
let remove = document.querySelector("#remove");
let smileyEmoji = document.querySelector("#smileyEmoji");
let animalEmoji = document.querySelector("#animalEmoji");
let foodEmoji = document.querySelector("#foodEmoji");
let acitivityEmoji = document.querySelector("#activityEmoji");
let smileyEmojis = document.querySelector(".smileyEmojis");
let animalEmojis = document.querySelector(".animalEmojis");
let foodEmojis = document.querySelector(".foodEmojis");
let activityEmojis = document.querySelector(".activityEmojis");
let hiddenArticle = document.querySelector(".hiddenArticle");
let tweet = document.querySelector(".tweet");
let para = document.querySelector("#para");
let tweetInput = document.querySelector("#tweetInput");
let planbutton = document.querySelectorAll(".planbutton");
let schedule = document.querySelector("#schedule");
let buttonclose = document.querySelector("#close");
let today = new Date();

voting.addEventListener("click", e =>{
    e.preventDefault();
    votingform.style.display = "block";
    para.textContent = tweetInput.value;
    console.log(tweetInput.value);
});

remove.addEventListener("click", e =>{
    e.preventDefault();
    votingform.style.display = "none";
});


smileyEmoji.addEventListener("click", e =>{
    e.preventDefault();
    smileyEmojis.style.display = "block";
    animalEmojis.style.display = "none";
    foodEmojis.style.display = "none";
    activityEmojis.style.display = "none";
});

animalEmoji.addEventListener("click", e =>{
    e.preventDefault();
    smileyEmojis.style.display = "none";
    animalEmojis.style.display = "block";
    foodEmojis.style.display = "none";
    activityEmojis.style.display = "none";
});

foodEmoji.addEventListener("click", e =>{
    e.preventDefault();
    smileyEmojis.style.display = "none";
    animalEmojis.style.display = "none";
    foodEmojis.style.display = "block";
    activityEmojis.style.display = "none";
});

acitivityEmoji.addEventListener("click", e =>{
    e.preventDefault();
    smileyEmojis.style.display = "none";
    animalEmojis.style.display = "none";
    foodEmojis.style.display = "none";
    activityEmojis.style.display = "block";
});

tweet.addEventListener("click", e =>{
    e.preventDefault();
    hiddenArticle.style.display = "block";
    para.textContent = tweetInput.value;

});


planbutton.forEach(function(button) {
    button.addEventListener('click', e => {
        e.preventDefault();
        schedule.style.display = "block";
    });
});

buttonclose.addEventListener("click", e =>{
    e.preventDefault();
    schedule.style.display = "none";
});


let li = document.createElement("li");
date.appendChild(li);
li.textContent = today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear();