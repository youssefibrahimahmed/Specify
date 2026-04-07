const text = document.querySelectorAll(".boxes");
const vid = document.querySelectorAll(".pvid");
const h4 = document.querySelectorAll(".boxes h4");
text.forEach(element => {

    element.addEventListener("click", function () {
        //remove the class from all
        text.forEach(e => e.classList.remove("active"));
        vid.forEach(e => e.classList.remove("active"));
        h4.forEach(e => e.classList.remove("active"));

        const id = this.dataset.video;

        //add the active adjective to current 
        this.classList.add("active");

        //add active to the title
        document.getElementsByClassName(id)[0].classList.add("active");

        //add active to the video
        document.getElementById(id).classList.add("active");
    });
});

// =------------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------=-----------------------
// we can use an array to store the data of the cards and then we can use the index of the array to change the content of the cards instead of changing the order of the cards in the DOM, this way we can avoid the problem of the cards being out of order when we click on them multiple times.  
//  first appear the first active card and then we can click on the cards to change the content of the cards without changing the order of the cards in the DOM.    
window.addEventListener("load", () => {
    const activeCard = document.querySelector(".cards .b.active");
    if (activeCard) {
        activeCard.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        })
    }
});
// then we  will select all cards and put them in an array and then we will use the index of the array to change the content of the cards instead of changing the order of the cards in the DOM, this way we can avoid the problem of the cards being out of order when we click on them multiple times.
let cards = document.querySelectorAll(".cards .b");
let container = document.querySelector(".cards .container");
let dots = document.querySelectorAll(".cards .dots li");
const cardsArray = Array.from(cards);

// cardsArray.forEach((card) => {card.classList.remove("active")});

function updateActive(index) {

    //  remove active from all cards and add active to the current card
    cardsArray.forEach((card) => card.classList.remove("active"));

    //add active to the current card
    cardsArray[index].classList.add("active");
}

// function to reset the container and add the cards in the order of the array

let rightArrow = document.querySelector(".fa-angle-right");
let leftArrow = document.querySelector(".fa-angle-left");

function resetContainer() {
    container.innerHTML = "";
    cardsArray.forEach((card) => container.appendChild(card));
}
let activeIndex = 1;
const dotsArray = Array.from(dots);
rightArrow.addEventListener("click", () => {

    //shift the array to left 
    cardsArray.push(cardsArray[0]);
    cardsArray.shift();
    activeIndex++;

    //reset the active dot
    dotsArray.forEach((dot) => dot.classList.remove("active"));

    // add active to the current dot
    activeIndex = activeIndex % 3;
    dotsArray[activeIndex].classList.add("active");

    // reset the container and add the cards in the order of the array
    resetContainer(2);

    // update the active card
    updateActive(2);

    // scroll the active card into view
    cardsArray[2].scrollIntoView({ behavior: "smooth", inline: "center", });

});

leftArrow.addEventListener("click", () => {

    //shift the array to right 
    cardsArray.unshift(cardsArray[cardsArray.length - 1]);
    cardsArray.pop();
    activeIndex--;

    //reset the active dot
    dotsArray.forEach((dot) => dot.classList.remove("active"));

    //add active to the new dot
    activeIndex = (activeIndex + 3) % 3;
    dotsArray[activeIndex].classList.add("active");

    // reset the container and add the cards in the order of the array
    resetContainer();

    // update the active card
    updateActive(2);
    // scroll the active card into view
    cardsArray[2].scrollIntoView({ behavior: "smooth", inline: "center", });
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        // reset the active dot
        dotsArray.forEach((dot) => dot.classList.remove("active"));
        // add active to the current dot
        dot.classList.add("active");
        // calculate the number of shifts needed to bring the clicked dot's card to the active position
        const shifts = (index - activeIndex + 3) % 3;
        // shift the array to the left or right based on the number of shifts
        if (shifts === 1) {
            cardsArray.push(cardsArray[0]);
            cardsArray.shift();
        } else if (shifts === 2) {
            cardsArray.unshift(cardsArray[cardsArray.length - 1]);
            cardsArray.pop();
        }
        // update the active index
        activeIndex = index;
        // reset the container and add the cards in the order of the array
        resetContainer();   
        // update the active card
        updateActive(2);
        // scroll the active card into view
        cardsArray[2].scrollIntoView({ behavior: "smooth", inline: "center", });
    });
});


// ===================================================================
// show the video when we click button and hide the video when we click on the close button
const showVideoButton = document.querySelector(".watch button");
const videoContainer = document.querySelector(".view-vid");
showVideoButton.addEventListener("click", () => {
    videoContainer.style.visibility = "visible";
    videoContainer.style.opacity = "1";
    document.body.style.overflow = "hidden";
})

// hide the video when we click on the close button
const closeBtn = document.querySelector(".view-vid span");
closeBtn.addEventListener("click", () => {
    videoContainer.style.visibility = "hidden";
    videoContainer.style.opacity = "0";
    document.body.style.overflow = "visible";
});

// ====================================================================
