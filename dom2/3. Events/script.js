//event inline HTML atribut
const p3 = document.querySelector(".p3")
function ubahWarna() {
    p3.style.backgroundColor = "lightblue"
}



// methdo element
const p2 = document.querySelector(".p2")
p2.onclick = () => {
    p2.style.backgroundColor = "lightblue"
}
// atau langsung manggil fucntionnya juga bisa


// addeventlistener
const p4 = document.querySelector("section#b p")
p4.addEventListener('click', function () {
    const ul = document.querySelector("section#b ul")
    const li = document.createElement("li")
    const teksLi = document.createTextNode("Item Baru")
    li.appendChild(teksLi)
    ul.appendChild(li)
})

