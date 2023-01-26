// DOM SELECTION

//1.) getElementByID -> element
const judul = document.getElementById("judul")
console.log(judul)
judul.style.color = "red"
judul.style.backgroundColor = "aqua"
judul.innerHTML = "yazid"




//2.) getelementbytagname -> HTMLCOllection
const p = document.getElementsByTagName("p")
console.log(p)
// p.style.backgroundColor = "red" // gak bisa
p[2].style.backgroundColor = "red" // bisannya gini karna dia array


// looping 1
/*
for (let a of p) {
    a.style.backgroundColor = "red"
}
*/

// looping 2
for (let a = 0; a < p.length; a++) {
    p[a].style.backgroundColor = "salmon"
}



//3.) getElementbyclassname -> HTMLCOllection
const p1 = document.getElementsByClassName("p1")
p1[0].innerHTML = "haiii askdjasdh"



//4.) querySelector -> element
const p4 = document.querySelector("#b p")
console.log(p4)
p4.style.color = "blue"
p4.style.fontSize = "30px"

const li2 = document.querySelector("section#b ul li:nth-child(2)")
li2.style.backgroundColor = "orange"

const para = document.querySelector("p")
para.innerHTML = "Ini diubah melali jas" // -> hanya 1 paragraf saja yang keubah



//5.) document.querySelectorALl() -> nodelist
const paragraf = document.querySelectorAll("p")
console.log(paragraf)
for (let p of paragraf) {
    p.style.backgroundColor = "lightblue"
}
