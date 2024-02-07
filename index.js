let homescore = 0
let guestscore = 0
let hScore = document.getElementById ("hscore")
let gScore = document.getElementById ("gscore")


function home1(){
    homescore = homescore + 1
    hScore.textContent = homescore
}

function home2(){
    homescore = homescore + 2
    hScore.textContent =  homescore
}

function home3(){
    homescore = homescore + 3
    hScore.textContent =  homescore
}

function guest1(){
    guestscore = guestscore + 1
    gScore.textContent = guestscore
}

function guest2(){
    guestscore = guestscore + 2
    gScore.textContent = guestscore
}

function guest3(){
    guestscore = guestscore + 3
    gScore.textContent = guestscore
}