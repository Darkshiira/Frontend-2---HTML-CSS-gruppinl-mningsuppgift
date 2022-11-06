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
let buttonclose = document.querySelectorAll("#close");
let gifbutton = document.querySelector("#gifbutton");
let gifs = document.querySelector("#gifs");
let blurrybackground = document.querySelector("#blurrybackground");
let comment = document.querySelector("#comment");
let commentbuttons = document.querySelectorAll(".comments");
let commentcounter = document.querySelector("#commentcounter");
let likes1 = document.querySelector("#likes1");
let likes2 = document.querySelector("#likes2");
let likes3 = document.querySelector("#likes3");
let likes4 = document.querySelector("#likes4");
let likeslabel1 = document.querySelector("#likeslabel1");
let likeslabel2 = document.querySelector("#likeslabel2");
let likeslabel3 = document.querySelector("#likeslabel3");
let likeslabel4 = document.querySelector("#likeslabel4");
let likescounter1 = document.querySelector("#likescounter1");
let likescounter2 = document.querySelector("#likescounter2");
let likescounter3 = document.querySelector("#likescounter3");
let likescounter4 = document.querySelector("#likescounter4");
let star = document.querySelector("#star");
let starmenu = document.querySelector("#starmenu");


let today = new Date();

star.addEventListener("click", e => {
    e.preventDefault();
    blurrybackground.style.display = "block";
    starmenu.style.display = "block";
});



voting.addEventListener("click", e =>{
    e.preventDefault();
    votingform.style.display = "block";
    para.textContent = tweetInput.value;
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

gifbutton.addEventListener("click", e =>{
    e.preventDefault();
    blurrybackground.style.display = "block"; 
    gifs.style.display = "block";

});

buttonclose.forEach(function(button) {
button.addEventListener("click", e => { 
    e.preventDefault();
    blurrybackground.style.display = "none";
    schedule.style.display = "none";
    gifs.style.display = "none";
    comment.style.display = "none";
});
});

blurrybackground.addEventListener("click", e =>{
    e.preventDefault();
    blurrybackground.style.display = "none";
    schedule.style.display = "none";
    gifs.style.display = "none";
    comment.style.display = "none";
    starmenu.style.display = "none";
});

commentbuttons.forEach(function(button) {
    button.addEventListener('click', e => {
        e.preventDefault();
        comment.style.display = "block";
        blurrybackground.style.display = "block";
        commentcounter.textContent = "1";
    });
});

likes1.addEventListener("change", e =>{
    e.preventDefault();
    if (likes1.checked)
    {
        likeslabel1.textContent = "❤️";
        likescounter1.textContent = "1";

    }
    else
    {
        likeslabel1.textContent = "🤍";
        likescounter1.textContent = "0";

    }
});

likes2.addEventListener("change", e =>{
    e.preventDefault();
    if (likes2.checked)
    {
        likeslabel2.textContent = "❤️";
        likescounter2.textContent = "1";
        (console.log("checked"));
    }
    else
    {
        likeslabel2.textContent = "🤍";
        likescounter2.textContent = "0";
        (console.log("unchecked"));
    }
});

likes3.addEventListener("change", e =>{
    e.preventDefault();
    if (likes3.checked)
    {
        likeslabel3.textContent = "❤️";
        likescounter3.textContent = "1";

    }
    else
    {
        likeslabel3.textContent = "🤍";
        likescounter3.textContent = "0";
    }
});

likes4.addEventListener("change", e =>{
    e.preventDefault();
    if (likes4.checked)
    {
        likeslabel4.textContent = "❤️";
        likescounter4.textContent = "1";

    }
    else
    {
        likeslabel4.textContent = "🤍";
        likescounter4.textContent = "0";
    }
});




let li = document.createElement("li");
date.appendChild(li);
li.textContent = today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear();