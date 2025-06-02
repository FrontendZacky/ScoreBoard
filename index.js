let scoreElHome = document.getElementById("score-el-home")
let scoreElGuest = document.getElementById("score-el-guest")
let scoreHome = 0
let scoreGuest = 0
scoreElHome.textContent = score
scoreElGuest.textContent = score


function addOne(){
    scoreHome = scoreHome + 1
    scoreElHome.textContent = scoreHome
}
function addTwo(){
    scoreHome = scoreHome + 2
    scoreElHome.textContent = scoreHome
}
function addThree(){
    scoreHome = scoreHome + 3
    scoreElHome.textContent = scoreHome
}

function addOneGuest(){
    scoreGuest = scoreGuest + 1
    scoreElGuest.textContent = scoreGuest
}
function addTwoGuest(){
    scoreGuest = scoreGuest + 2
    scoreElGuest.textContent = scoreGuest
 }
function addThreeGuest(){
    scoreGuest = scoreGuest + 3
    scoreElGuest.textContent = scoreGuest
 }