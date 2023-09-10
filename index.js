// document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")
 console.log(countEl)
 let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
function save() {
    console.log(count)
}
function save() {
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}