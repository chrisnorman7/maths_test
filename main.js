const firstSpan = document.getElementById("first")
const secondSpan = document.getElementById("second")
const answerP = document.getElementById("answer")

const generate = document.getElementById("generate")
generate.onclick = () => {
    let first = Math.max(Math.floor(Math.random() * 100), 1)
    let second = Math.max(Math.floor(Math.random() * 9), 1)
    let third = first * second
    second /= 10
    third /= 10
    firstSpan.innerText = third
    secondSpan.innerText = second
    answerP.innerText = first
    answerP.hidden = true
}

window.onload = () => generate.click()

document.getElementById("showAnswer").onclick = () => answerP.hidden = false
