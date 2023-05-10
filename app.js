// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

var container = document.getElementById("product-list-container");

var createCalculate = (product) => {
    var calculate = document.createElement("input");
    calculate.setAttribute("type", "number")
    calculate.setAttribute("name", "calculate" + product.description);
    calculate.setAttribute("min", "0")
    calculate.setAttribute("max", product.stock);
    calculate.setAttribute("id", product.description);
    calculate.addEventListener("change", event => product.units = parseInt(event.target.value));
    return calculate;
};

var createDescription = (product) => {
    var description = document.createElement("h5");
    description.innerText = product.description + " - " + product.price + "€/ud.";
    container.appendChild(description);
    description.appendChild(createCalculate(product));
};

var showProducts = (productList) => {
    for (var product of productList) {
        createDescription(product);
    }
};

showProducts(products);

//operations

var calculation = () => {
    var total = 0
    var subtotal = 0
    var iva = 0
    for (var product of products) {
        subtotal = (product.units * product.price) + subtotal;
        iva += ((product.units * product.price) * product.tax)/100 
    }
    total = subtotal + iva
    console.log(total);
    console.log(iva);
    console.log(subtotal);
};

//events 
document.getElementById("calculate").addEventListener("click", calculation);

//pantalla
document.getElementById("subtotal").innerText = "Subtotal"
document.getElementById("iva").innerText = "Iva"
document.getElementById("total").innerText = "Total"