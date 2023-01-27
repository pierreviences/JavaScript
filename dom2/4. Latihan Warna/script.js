const button = document.getElementById("tombolWarna")
const body = document.getElementsByTagName("body")[0]
// bisa gitu atau bisa gini document.body

button.onclick = function () {
    // body.style.backgroundColor = "lightblue"
    // body.setAttribute('class', 'biru-muda')
    body.classList.toggle("biru-muda")
}


// bikin warna random
const acakWarna = document.createElement("button")
const teksTombol = document.createTextNode("Acak Warna")
acakWarna.appendChild(teksTombol)
acakWarna.setAttribute('type', 'button')

button.after(acakWarna)
acakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1) // menghasilkan nilai dari 1 - 255
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)

    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})



// slider
const sMerah = document.querySelector("input[name=sliderMerah]")
const sHijau = document.querySelector("input[name=sliderHijau]")
const sBiru = document.querySelector("input[name=sliderBiru]")
sMerah.addEventListener('input', function () {
    const b = sBiru.value
    const h = sHijau.value
    const r = sMerah.value
    body.style.backgroundColor = 'rgb(' + r + ',' + h + ',' + b + ')'
})
sHijau.addEventListener('input', function () {
    const b = sBiru.value
    const h = sHijau.value
    const r = sMerah.value
    body.style.backgroundColor = 'rgb(' + r + ',' + h + ',' + b + ')'
})
sBiru.addEventListener('input', function () {
    const b = sBiru.value
    const h = sHijau.value
    const r = sMerah.value
    body.style.backgroundColor = 'rgb(' + r + ',' + h + ',' + b + ')'
})



body.addEventListener('mousemove', function (e) {
    // posisi mouse
    // console.log(e.clientY)
    // console.log(e.clientX)

    // ukuran bowser
    // console.log(window.innerWidth)

    const xPos = Math.round((e.clientX / window.innerWidth) * 255)
    const yPost = Math.round((e.clientY / window.innerHeight) * 255)

    body.style.backgroundColor = 'rgb(' + xPos + ',' + yPost + ', 100)'


})

