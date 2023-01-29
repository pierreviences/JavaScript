
/*
    AJAX
    -> pengertianny ada di buku catetan
    -> intinya dia mengambil / mengirim data ke url lain

    cara membuat : 
    const ajax = new XMLHttpRequest()
    ajax.open("METHOD", "URL")
    ajax.send()
*/
function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword, callbackSukses, callbackError) {
    // Code AJAX Here!
    const ajax = new XMLHttpRequest()

    // ajax callback
    ajax.onload = function () {

        if (ajax.status == 200) {
            const data = JSON.parse(ajax.responseText)
            callbackSukses(data)
        } else {
            callbackError
        }

    }
    const url = getProductsUrl(keyword)
    ajax.open("GET", url)
    ajax.send()


    // tidak bisa dilakukan secara sync
    // const response = JSON.parse(ajax.responseText)
    // console.log(response)
}

function getProductsError() {
    console.log('Eror get products')
    alert("Error get products")
}

function clearProducts() {
    const productUl = document.getElementById("products");
    productUl.textContent = "";
}

function displayProducts(data) {
    data.data.products.forEach(product => s(product));
}

function getProducts(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products");
    productUl.appendChild(productLi);
}

function clearTableProducts() {
    const productUl = document.getElementById("table-products");
    productUl.textContent = "";
}

function displayTableProducts(data) {
    const table = document.createElement("table");
    table.setAttribute("border", 1);

    let index = 0;
    data.data.products.forEach(product => {
        table.insertRow(index).insertCell(0).innerText = product.name;
        index++;
    });

    const tableProduct = document.getElementById("table-products");
    tableProduct.appendChild(table);
}

function buttonClick() {
    getProducts(document.getElementById("keyword").value, function (data) {
        clearProducts()
        displayProducts(data)
    }, function () {
        getProductsError()
    });

    getProducts(document.getElementById("keyword").value, function (data) {
        clearTableProducts()
        displayTableProducts(data)
    }, function () {
        getProductsError()
    });
}
