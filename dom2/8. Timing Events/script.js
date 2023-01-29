// setTimeout()
function tampilkanPesan() {
    console.log('Hello World')
}

setTimeout(tampilkanPesan, 2000)
setTimeout(() => {
    console.log('ok')
}, 1500);

// bisa dimasukkin ke variabel juga
const tes = setTimeout(() => {
    console.log('ok guys ini bakal gak muncul kalo lagsung di klik dalam dibawah sedetik')
}, 1000);


const tombol = document.getElementById('tombol')
tombol.addEventListener('click', function () {
    clearTimeout(tes)
    console.log('selesai')
})



// setInterval()
setInterval(() => {
    console.log('set interval')
}, 2500)


