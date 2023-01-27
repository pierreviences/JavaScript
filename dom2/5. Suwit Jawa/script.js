function getPilihanComputer() {
    const computer = Math.random();
    if (computer < 0.34) return 'gajah'
    if (computer >= 0.34 && computer < 0.67) return 'orang';
    return 'semut';
}

function getHasil(computer, player) {

    if (player == computer) return 'SERI!';
    if (player == 'gajah') return (computer == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (computer == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (computer == 'orang') ? 'KALAH' : 'MENANG!';
    return 'memasukkan pilihan yang salah!';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer')
    console.log(imgComputer)
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0

    const waktuMulai = new Date().getTime()

    setInterval(function () {

        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length) i = 0

    }, 100)
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(pil => {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        putar()

        setTimeout(() => {
            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

            const info = document.querySelector('.info')
            info.innerHTML = hasil
        }, 1000)


    })
})

/*

const gajah = document.querySelector('.gajah')
gajah.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer()
    const pilihanPlayer = gajah.className
    const hasil = getHasil(pilihanComputer, pilihanPlayer)

    const imgComputer = document.querySelector('.img-komputer')
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

    const info = document.querySelector('.info')
    info.innerHTML = hasil
})

const orang = document.querySelector('.orang')
orang.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer()
    const pilihanPlayer = orang.className
    const hasil = getHasil(pilihanComputer, pilihanPlayer)

    const imgComputer = document.querySelector('.img-komputer')
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

    const info = document.querySelector('.info')
    info.innerHTML = hasil
})

const semut = document.querySelector('.semut')
semut.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer()
    const pilihanPlayer = semut.className
    const hasil = getHasil(pilihanComputer, pilihanPlayer)

    const imgComputer = document.querySelector('.img-komputer')
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

    const info = document.querySelector('.info')
    info.innerHTML = hasil
})

*/