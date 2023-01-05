let result = document.querySelector('.result')
let scoreEl = document.querySelector('.score')
let timeEl = document.querySelector('.time')
let select = document.querySelector('.select')
let ranword
let score = 0
let time = 11
let level = 2
let input = document.querySelector('input')
select.addEventListener('change', () => {
    level = +select.value
    console.log(level);
})
function word() {
    const ranNum = Math.trunc(Math.random() * words.length)
    ranword = words[ranNum]
    result.innerHTML = ranword
    // console.log(ranword.length);
}
input.addEventListener('input', function func() {
    if (ranword == input.value) {
        input.classList.remove('wrong')
        word()
        score++
        scoreEl.innerHTML = `Score: ${score}`
        input.value = ''
        if (level == 1) {
            time = +14
        } else if (level == 2) {
            time = +10
        } else if (level == 3) {
            time = +8
        }
    } else {
        input.classList.add('wrong')
    }
})
let start = document.querySelector('.start')
start.addEventListener('click', () => {
    word()
    time = 11
    score = 0
    scoreEl.innerHTML = `Score: ${score}`
    input.value = ''
    input.classList.remove('wrong')
    setInterval(() => {
        if (time > 0) {
            time--
        }
        timeEl.innerHTML = `Time: ${time}s`
        if (time == 0) {
            document.querySelector('.modal').classList.add('show')
        } else {
            document.querySelector('.modal').classList.remove('show')
        }
    }, 1000);
})

let restart = document.querySelector('.restart')
restart.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('show')
    time = 11
    score = 0
    scoreEl.innerHTML = `Score: ${score}`
    word()
    input.value = ''
    input.classList.remove('wrong')
})
