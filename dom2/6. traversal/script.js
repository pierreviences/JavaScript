// event handling
// dom traversal -> menulusuri entah itu parent atau child

// kalo kaya gini cuman 1 yang ke hapus
// sisanya gak bisa keapus
/*
const close = document.querySelector('.close')
const card = document.querySelector('.card')

close.addEventListener('click', function () {
    card.style.display = "none"
})
*/




// DOM Traversal
// cara 1 -> tapi bukan dom traversal
/*
const close = document.querySelectorAll('.close')
const card = document.querySelectorAll('.card')
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
        card[i].style.display = 'none'
    })
}
*/


// cara 2 -> traversal
/*
const close = document.querySelectorAll('.close')
const card = document.querySelectorAll('.card')
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
        close[i].parentElement.style.display = 'none'
    })
}
*/

// cara 3 -> traversal pake event paremeter function
/*
const close = document.querySelectorAll('.close')
const card = document.querySelectorAll('.card')
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none'
    })
}
*/

// cara 4 -> traversal pake foreach
const close = document.querySelectorAll('.close')
const card = document.querySelectorAll('.card')
close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none'
    })
})




// contoho lain
const nama = document.querySelector(".nama")
console.log(nama.parentElement)