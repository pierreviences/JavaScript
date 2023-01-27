//  LANGKAH LANGKAH

// 1.) ambil semua elemen video
// karena dia tipenya node list dan biar dijadiin array maka kita tambahin Array.from
const videos = Array.from(document.querySelectorAll("[data-duration]"))
console.log(videos)


// 2.) pilih hanya yang "javascript lanjutan"
// includes -> terdapat apa ditulisan tersebut
const jsLanjutFilter = videos.filter(video => video.innerHTML.includes("JAVASCRIPT LANJUTAN"))
console.log(jsLanjutFilter)


// 3.) ambil durasi masing2 video
jsLanjutdurasi = jsLanjutFilter.map(item => item.dataset.duration)


// 4.) ubah durasi menjadi float, ubah menit menjadi detik
jsLanjutWaktu = jsLanjutdurasi.map(waktu => {
    // 10:30 -> [10, 30] -> di split
    const parts = waktu.split(':')
    // karena dia bentuknuya string ["10", "30"], kita jadiin float dlu
    const parsFloat = parts.map(part => parseFloat(part))
    // [10, 30] -> si 10(menit) dijadiin detik
    return (parsFloat[0] * 60) + parsFloat[1]
})




// 5.) jumlah semua detik
let total = jsLanjutWaktu.reduce((total, detik) => total + detik)

// ubah formatnya jadi jam menit detik
const jam = Math.floor(total / 3600)
total = total - (jam * 3600)
const menit = Math.floor(total / 60)
const detik = total - menit * 60




// 6.) simpan di dom
const pDurasi = document.querySelector(".total-durasi")
pDurasi.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik.`
const jmlhVideo = jsLanjutFilter.length

const pJmlhVideo = document.querySelector(".jumlah-video")
pJmlhVideo.innerHTML = `${jmlhVideo} Video`
