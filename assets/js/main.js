const roundsChoice = document.getElementById("roundsChoice")
const rounds = document.getElementById("rounds")
const result = document.getElementById("result")
const history = document.getElementById("history")
let maxRound = 20
let count = 1
let userWin = 0
let compWin = 0

function rspMain(user) {
    if (count > maxRound) {
        return
    }
    if (roundsChoice.style.display != "none") {
        roundsChoice.style.display = "none"
        maxRound = roundsChoice.round.value
        history.innerHTML = ""
    }
    rounds.innerHTML = `${count} / ${maxRound}`
    let comp = Math.floor(Math.random() * 3)
    if (user == comp) {
        history.innerHTML += `${rspStr(user)}<sup>(user)</sup> vs <br>${rspStr(comp)}<sup>(comp)</sup> : DRAW<br>`
    } else if ((user == 0 && comp == 1) || (user == 1 && comp == 2) || (user == 2 && comp == 0)) {
        history.innerHTML += `${rspStr(user)}<sup>(user)</sup> vs <br>${rspStr(comp)}<sup>(comp)</sup> : You Win!<br>`
        userWin++
    } else {
        history.innerHTML += `${rspStr(user)}<sup>(user)</sup> vs <br>${rspStr(comp)}<sup>(comp)</sup> : Yow Lose!<br>`
        compWin++
    }
    result.innerHTML = `${userWin}:${compWin}`
    if (count == maxRound) { 
        if (userWin == compWin) {
            history.innerHTML += `<span class="draw">GAME END! DRAW!!</span>`
        } else if (userWin > compWin) {
            history.innerHTML += `<span class="youWin">GAME END! You Win!!</span>`
        } else {
            history.innerHTML += `<span class="youLose">GAME END! Yow Lose!!</span>`
        } 
    }
    history.scrollTop = history.scrollHeight
    count++
}

function rspStr(num) {
    if (num == 0) {
        return "Rock"
    } else if (num == 1) {
        return "Scissors"
    } else {
        return "Paper"
    }
}