// timer increment every second
const likeCol = {}
const counter = document.getElementById('counter');
let time = 0
let counterTime = 0
const timer = ()=> {
    time = setInterval(interactWithTimerUp, 1000)
}
  
document.addEventListener('DOMContentLoaded', timer);

interactWithTimerUp = () => {counter.innerText = counterTime++ }

interactWithTimerDown = () => counter.innerText = counterTime--;



//Manually increment and decrement the counter using the plus and minus buttons.
minus = document.getElementById('minus')
plus = document.getElementById('plus')
pause = document.getElementById('pause')
heart = document.getElementById('heart')
minus.addEventListener('click', interactWithTimerDown);
plus.addEventListener('click', interactWithTimerUp);

//"Like" an individual number of the counter. 
//I should see the count of the number of "likes" associated with that number displayed.
heart.addEventListener('click', likeNum)

function likeNum(){
    const nowTime = counter.innerText
    const likeBtn = document.querySelector('.likes')
    if(likeCol[nowTime]){
        likeCol[nowTime] = likeCol[nowTime] + 1
        document.getElementById(nowTime).textContent = `${nowTime} has been liked ${likeCol[nowTime]} times`
    }else{
        likeCol[nowTime] = 1
        const likedNum = document.createElement('li')
        likedNum.setAttribute('id', nowTime)
        likedNum.textContent = `${nowTime} has been liked ${likeCol[nowTime]} times`
        likeBtn.appendChild(likedNum)
    }
}

//Pause the counter, which should:
// -pause the counter
// -disable all buttons except the pause button
// -switch the label on the button from "pause" to "resume"
// -Click the "resume" button to restart the counter and re-enable the buttons.

pause.addEventListener('click', function () {
    if(pause.textContent === "resume"){
        minus.removeAttribute('disabled')
        plus.removeAttribute('disabled')
        heart.removeAttribute('disabled')
        pause.textContent = "pause"
    }else{
        clearInterval(time);
        minus.setAttribute('disabled', true)
        plus.setAttribute('disabled', true)
        heart.setAttribute('disabled', true)
        pause.textContent = "resume"
    }
})


//Leave comments on my gameplay, such as: "Wow, what a fun game this is."

document.getElementById('submit').addEventListener('click', function (event){
    event.preventDefault()
    const commentInput = document.getElementById('comment-input')
    p = document.createElement('p')
    p.textContent = commentInput.value
    document.getElementById('list').appendChild(p)
    commentInput.value = ""
} )
