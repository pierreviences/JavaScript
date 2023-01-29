// event bubling - cara 1

const container = document.querySelector('.container')
console.log(container)
const jumbo = document.querySelector('.jumbo')

const thumbs = document.querySelectorAll('.thumb')
container.addEventListener('click', function (e) {
    // cek apakah yang di klik adalah thumb
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src

        // biar ada animasi
        jumbo.classList.add('fade')
        setTimeout(function () {
            jumbo.classList.remove('fade')
        }, 500)



        // biar aktive pas di klik
        thumbs.forEach(function (thumb) {

            /*
            cara 1
            if (thumb.classList.contains('active')) {
                thumb.classList.remove('active')
            }
            */

            // cara 2 lebih sederhana
            thumb.className = 'thumb'
        })
        e.target.classList.add('active')

    }
})
