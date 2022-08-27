var title = document.querySelector('.title')


var titleArray = [
    'white.jpg',
    'pinkstar.jpg',
    'purplestar.jpg',
    'bluehr.jpg',
    'gplay.png',
    'gify1.png',
    '11.jpg',
    '61483.jpg',
    '5231801.jpg',
    'rainbow.jpg',
    'rainbow1.png',
    'cloud1.jpg',
    'iceblue.jpg',
    'blue2.jpg',
    'brgr.jpg'
]
var aRamdomNum = Math.floor(Math.random() * titleArray.length);
title.style.backgroundImage = "url(img/bg/" + titleArray[aRamdomNum] + ")";


// Declare cardSet for all cards
var cardcard = document.querySelectorAll(".card");

//var head = document.getElementById('head')
var board = document.getElementById('board')
var dashboard = document.getElementById('dashboard')
var colorPicker = document.getElementById('colorPicker')
var data = document.getElementById('data')
var counterTimer = document.getElementById('counterTimer')
var counter = document.getElementById("counter")
var timer = document.getElementById("timer")
    //const result = document.getElementById("result")

const memoryGame = document.getElementById("memory-game")
var dial = document.getElementById('dial')
var bar = document.getElementById('bar')
var barOuter = document.querySelector('.barOuter')
var restartButton = document.getElementById("restartButton");

// ----------------- Sound -----------------
const flipSound = document.getElementById('flipSound')

const match = document.getElementById('match')
const startButton = document.getElementById('startSound')
const shutSound = document.getElementById('shutSound')
var cardGet = document.getElementById('cardGet')
const tapSound = document.getElementById('tap')



function switchSound() {
    tapSound.play()
}

var dialInterval;
var winCount = 0;
let msCount = 0;


// ======================= Modal ===========================
var modalText = document.getElementById('modalText')
var modalImg = document.getElementById('modalImg')
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    modalText.innerHTML = `${yourTitle()}`;
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// ------------------------------- Card pool ---------------------------------//
var cardDeck = [
    { name: "1.png", image: "img/cards/1.png" }, // new add 
    { name: "2.png", image: "img/cards/2.png" }, // new add 
    { name: "3.png", image: "img/cards/3.png" }, // new add 
    { name: "4.png", image: "img/cards/4.png" }, // new add 
    { name: "5.png", image: "img/cards/5.png" }, // new add 
    { name: "6.png", image: "img/cards/6.png" }, // new add 
    { name: "7.png", image: "img/cards/7.png" }, // new add 
    { name: "8.png", image: "img/cards/8.png" }, // new add 
    { name: "9.png", image: "img/cards/9.png" }, // new add 
    { name: "10.png", image: "img/cards/10.png" }, // new add 
    { name: "11.png", image: "img/cards/11.png" }, // new add 
    { name: "12.png", image: "img/cards/12.png" }, // new add 
    { name: "13.png", image: "img/cards/13.png" }, // new add 
    { name: "14.png", image: "img/cards/14.png" }, // new add 
    { name: "15.png", image: "img/cards/15.png" }, // new add 
    { name: "16.png", image: "img/cards/16.png" }, // new add 
    { name: "17.png", image: "img/cards/17.png" }, // new add 
    { name: "18.png", image: "img/cards/18.png" }, // new add 
    { name: "19.png", image: "img/cards/19.png" }, // new add 
    { name: "20.png", image: "img/cards/20.png" }, // new add 
    { name: "21.png", image: "img/cards/21.png" }, // new add 
    { name: "22.png", image: "img/cards/22.png" }, // new add 
    { name: "23.png", image: "img/cards/23.png" }, // new add 
    { name: "24.png", image: "img/cards/24.png" }, // new add 
    { name: "25.png", image: "img/cards/25.png" }, // new add 
    { name: "26.png", image: "img/cards/26.png" }, // new add 
    { name: "27.png", image: "img/cards/27.png" }, // new add 
    { name: "28.png", image: "img/cards/28.png" },
    { name: "29.png", image: "img/cards/29.png" },
    { name: "30.png", image: "img/cards/30.png" },
    { name: "31.png", image: "img/cards/31.png" },
    { name: "32.png", image: "img/cards/32.png" },
    { name: "33.png", image: "img/cards/33.png" }
]


let cardValues = [];
//Pick random objects from the items array
const generateRandom = (size = 6) => {
    //temporary array
    let tempArray = [...cardDeck];
    //initializes cardValues array
    cardValues = [];
    //size should be double (4*4 matrix)/2 since pairs of objects would exist

    //Random object selection
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        //once selected remove the object from temp array
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};

generateRandom(6);

const matrixGenerator = (cardValues, size = 12) => {
    memoryGame.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
    // //simple shuffle
    cardValues.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 12; i++) {
        memoryGame.innerHTML += `
             <div class="card" data-framework="${cardValues[i].name}">
                 <img class="front-face" src="${cardValues[i].image}" alt="front" />
                 <img class="back-face" src="img/bg/9.png" alt="JS Badge" />
            </div>
             `;
    }
    //Grid
    memoryGame.style.gridTemplateColumns = `repeat(${size},auto)`;
}

matrixGenerator(cardValues, 12);

barOuter.classList.add('hide');





/*--------------------------- Background color pool -----------------------------------*/
var colorArray = [
    'rgba(57, 100, 136, 0.877)', // navy
    'rgba(255, 227, 133, 0.329)', // yellow
    'rgba(6, 145, 133, 0.329)', //green candy
    'rgba(29, 30, 70, 0.363)', //gray
    'rgba(214, 112, 112, 0.329)', //pink
    'rgba(177, 111, 13, 0.329)', //vintage yellow
    'rgba(131, 4, 4, 0.527)', // red
    'rgba(13, 76, 95, 0.733)', // solid
    'rgba(4, 131, 21, 0.363)', //green
    'rgba(117, 51, 141, 0.541)', //purple
    '#408a8d', // green
    '#30404d', // cyberpunk
    '#422249' // dark purple
]

var j = 0
colorPicker.addEventListener('click', function color() {
    board.style.backgroundColor = colorArray[j];
    j++;
    if (j == colorArray.length) {
        j = 0;
    }
})



/* ---------- 时间 interval ------------ */
var imageInterval;
let interval; // Store the setInterval(timeGenerator, 1000)

let hasFlippedCard = false;
let lockBoard = false;

let firstCard, secondCard;



/*---------------------- Timer -----------------------*/
//Initial Time
var mills = 0;
var seconds = 0;
var minutes = 0;

//For timer
const timeGenerator = () => {
    mills += 1;

    if (mills >= 100) {
        seconds += 1;
        mills = 0;
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
        }
    }

    // format time before displaying
    var msValue = mills < 10 ? `0${mills}` : mills;
    var secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    var minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timer.innerHTML = `<span>[ ${minutesValue}:${secondsValue}:${msValue} ]</span>`;
};


var timerOn = false;

function resetTimer() {
    timerOn = true;
    clearInterval(interval);
    mills = 0;
    seconds = 0;
    minutes = 0;
    interval = setInterval(timeGenerator, 10);
}



function yourTitle() {
    if (msCount <= 1200) {
        modalImg.classList.remove('hide')
        return `<p>Level: <span class="animate-charcter">War God</span></p>`;
    }
    if (msCount > 1200 && msCount <= 1800) {
        modalImg.classList.add('hide')
        let gap = (msCount - 1200) / 100;
        gap = gap.toFixed(2);
        return `<p>Level: <span style="color: #860029; font-weight: 600; font-family: Verdana, Geneva, Tahoma, sans-serif;">Cavalry</span><br>
        [You are <span style="color: #860029; font-weight: 600; font-family: Verdana, Geneva, Tahoma, sans-serif;">${gap}</span> seconds slower than War God!]</p>`;
    } else {
        modalImg.classList.add('hide')
        let gap2 = (msCount - 1800) / 100;
        gap2 = gap2.toFixed(2)
        return `<p>Level: <span style="color: #860029; font-weight: 600; font-family: Verdana, Geneva, Tahoma, sans-serif;">Infantry</span><br>
        [You are <span style="color: #860029;font-weight: 600; font-family: Verdana, Geneva, Tahoma, sans-serif;">${gap2}</span> seconds slower than Cavalry!]</p>`

    }
}



// -----------------------------------------------------------------------

function flipCard() {
    flipSound.play()
    if (lockBoard) {
        return;
    }
    // this : card
    if (this === firstCard) {
        return;
    }

    // Add flip class to the card
    this.classList.add('flip');

    if (!hasFlippedCard) { // If hasFlippedCard is false
        // first click
        hasFlippedCard = true; // Set hasFlippedCard to true
        firstCard = this; // Set firstCard to this object
        return;
    } else {
        // second click

        secondCard = this;

    }
    checkForMatch();
}


function fillBar1() { bar.classList.add('w1') }

function fillBar2() { bar.classList.add('w2') }

function fillBar3() { bar.classList.add('w3') }

function fillBar4() { bar.classList.add('w4') }

function fillBar5() { bar.classList.add('w5') }

function fillBar6() { bar.classList.add('w6') }

function fillBar7() { bar.classList.add('w7') }

function fillBar8() { bar.classList.add('w8') }



/*-----------------------Check if Match -----------------------*/
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    if (isMatch) {
        match.play()
        disableCards();
        winCount += 1;


        if (winCount == 1) {
            fillBar1();
        }
        if (winCount == 2) {
            fillBar2();
        }
        if (winCount == 3) {
            fillBar3();
        }
        if (winCount == 4) {
            fillBar4();
        }
        if (winCount == 5) {
            fillBar5();
        }
        if (winCount == 6) {
            fillBar6(); // bar fill
        }

    } else {
        unflipCards();
    }

    if (winCount == 6) {
        cardGet.play();

        msCount = minutes * 60 * 100 + seconds * 100 + mills

        toggleModal(); // 弹出Modal
        clearInterval(interval);

    }
}



function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 280);
}



function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/*----------------- Shuffle cards ------------------*/

function shuffle() {
    cardcard.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}
shuffle();

/*--------------- Generate Board ------------------*/
function generateBoard() {
    generateRandom(6);
    matrixGenerator(cardValues, 12);
    shuffle();
}


/*--------------- addEventListener for card flip ------------------*/

function listenFlip() {
    var cardcard = document.querySelectorAll('.card')
    for (let i = 0; i < cardcard.length; i++) {
        cardcard[i].addEventListener('click', flipCard)
    }
    cardcard.forEach(card => card.classList.remove('flip'))
}



/*------------------ Start Button ---------------------*/
function startGame() {

    resetBoard();
    counterTimer.classList.remove('hide')
        //result.classList.remove('hide')
    barOuter.classList.remove('hide');
    dashboard.classList.add('dashbg');

    // resetBoard();
    winCount = 0;

    msCount = 0;

    bar.className = 'w0';
    bar.classList.remove('hide');

    // Time button
    if (timerOn == false) {
        startButton.play() // start button Music
        resetTimer();
        // Generate Board
        generateBoard();
        listenFlip();
        counterTimer.style.color = "white";
    } else {
        clearInterval(interval); // stop
        shutSound.play()
            //  generateBoard();
        timer.innerHTML = `<span>[ 00:00:00 ]</span>`;
        timerOn = false;
        var cardcard = document.querySelectorAll('.card')
        cardcard.forEach(card => card.removeEventListener('click', flipCard))
        dashboard.classList.remove('dashbg');
        counterTimer.style.color = "black";
    }


}


restartButton.addEventListener('click', startGame)