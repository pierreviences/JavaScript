function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    // Code Promise Here!
    const promise = new Promise(function (resolve, reject) {
        // code async
        const ajax = new XMLHttpRequest()
        ajax.onload = function () {

            if (ajax.status == 200) {
                const data = JSON.parse(ajax.responseText)
                resolve(data)
            } else {
                reject(Error("Gagal mengambil data produk"))
            }

        }
        const url = getProductsUrl(keyword)
        ajax.open("GET", url)
        ajax.send()
    })

    return promise

}

function clearProducts() {
    const productUl = document.getElementById("products");
    productUl.textContent = "";
}



function displayProduct(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products");
    productUl.appendChild(productLi);
}

function buttonClick() {
    // promise all method
    const promise = getProducts(document.getElementById("keyword").value);
    const promise2 = getProducts(document.getElementById("keyword2").value);
    const promise3 = getProducts(document.getElementById("keyword3").value);

    Promise.all([promise, promise2, promise3])
        .then(function (value) {
            return value.map((val) => val.data.products)
        })
        .then(function (value) {
            clearProducts()
            value.forEach(product => product.forEach(produk => displayProduct(produk)))
        })
        .catch(function (err) {
            alert(err.message)
        })
        .finally(function () {
            console.log("Selesai juga")
        })
}
