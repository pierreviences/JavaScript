function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    const promise = new Promise(function (resolve, reject) {
        const ajax = new XMLHttpRequest();
        ajax.onload = function () {
            if (ajax.status === 200) {
                const data = JSON.parse(ajax.responseText);
                resolve(data);
            } else {
                reject(Error(ajax.statusText));
            }
        };
        ajax.open("GET", getProductsUrl(keyword));
        ajax.send();
    })

    return promise
}

function clearProducts() {
    const productUl = document.getElementById("products");
    productUl.textContent = "";
}

function displayProducts(data) {
    data.data.products.forEach(product => displayProduct(product));
}

function displayProduct(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products");
    productUl.appendChild(productLi);
}

async function buttonClick() {

    /* 
    BEFORE

    const promise = getProducts(document.getElementById("keyword").value);
    promise
        .then(function (value) {
            return value.data.products
        })
        .then(function (products) {
            clearProducts()
            products.forEach(function (product) {
                displayProduct(product)
            })
        })
        .catch(function (err) {
            alert(err.message)
        })

    */

    // Code Async Await Here!
    /*
    const value = await getProducts(document.getElementById('keyword').value)
    const produk = value.data.products
    clearProducts()
    produk.forEach(item => displayProduct(item))
        */

    // bikin error handler async await
    try {
        const value = await getProducts(document.getElementById('keyword').value)
        const produk = value.data.products
        clearProducts()
        produk.forEach(item => displayProduct(item))
    } catch (e) {
        alert(e.message)
    } finally {
        console.log("selesai memperoses async await")
    }
}