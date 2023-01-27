/*
    MANIPULASI ELEMENT
    1. innerHTML = isi teks
*/

const judul = document.getElementById("judul")
judul.innerHTML = "<em>Yazid Imani</em>"

// const sectionA = document.querySelector("section#a")
// sectionA.innerHTML = "mmmm"



/*
    2. style.property = ibuat css
*/
const judul2 = document.querySelector("#judul")
judul2.style.color = "lightblue"
judul2.style.backgroundColor = "salmon"


/*
    3. element.setAtribut(nama, value) = buat nambah atribut
       - element.getAtribute(namaatibut) = mengambil isi atribut
       - element.removeAtribute(namaatibut) = untuk menghapus
*/

const judul3 = document.getElementsByTagName("h1")[0]
judul3.setAttribute("name", "yazid")

const a = document.querySelector("section#a a")
a.setAttribute("id", "link")
console.log(a.getAttribute("id"))


/*
    4. element.classList -> untuk mengelola class
       - element.classList.add() -> untuk menambah class baru supaya tidak menima
       - element.classList.add() -> menghilangkan class
       - element.classList.toggle() -> jika gak ada clas, dia nambah, jika ada classnya, dia akan menghilangkan
       - element.classList.item() -> untuk mengetahui class tertentu
       - element.classList.contains -> dalma sebuah elemen pinya gak kelas tertenu
       - element.classList.replace() -> uhntuk ngeganti kelas yang ada ke kelas yang baru
*/

const p2 = document.querySelector(".p2")
p2.classList.add("yazid")
p2.classList.add("imani")
p2.classList.add("muhamad")
p2.classList.remove("imani")
p2.classList.toggle("yazidss")
console.log(p2.classList.item(1))








/*
    MANIPULASI NODE
    1. doucment.createElement() -> bikin element baru
    2. document.createTextNode() -> nambah teks
    3. node.appendChild() -> ngegabungin
*/

const pBaru = document.createElement("p")
const teksBaru = document.createTextNode("paragraf barus")
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru)
// simpan pBaru di akhir section A
const sectionA = document.getElementById("a")
sectionA.appendChild(pBaru)





/*
    4. node.insertBefore(nodebaru, nodeafter) -> untuk menambahka tapi sebelum nodenya
*/
const liBaru = document.createElement("li")
const teksLiBaru = document.createTextNode("Item baru")
liBaru.appendChild(teksLiBaru)

const ul = document.querySelector("section#b ul ")
const li = document.querySelector("section#b ul li:nth-child(2) ")
ul.insertBefore(liBaru, li)




/*
    5. parentNode.removeChild() -> buat hapus
    6. parentNode.replaceChild(nodebaru, nodelama) -> buat replace
*/

const sectionsA = document.getElementById("a")
const link = document.getElementsByTagName("a")[0]
sectionsA.removeChild(link)

const sectionsB = document.getElementById("b")
const p4 = sectionsB.querySelector("p")
const h2Baru = document.createElement("h2")
const teksH2Baru = document.createTextNode("Judul Baru")

h2Baru.appendChild(teksH2Baru)
sectionsB.replaceChild(h2Baru, p4)


