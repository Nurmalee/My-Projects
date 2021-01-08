const quantity = document.querySelector("#quantity");
const displayQuantity = document.querySelector("#display-quantity");
const productFormBtn = document.querySelector("#product-form button");
const productPriceContainer = document.querySelector("#product-price");
const anotherProductPriceContainer = document.querySelector("#price");
const shippingCostContainer = document.querySelector("#shipping-cost");
const shippingRate = document.querySelector("#shipping-rate");
const totalCostContainer = document.querySelector("#total-cost");
const productDescription = document.querySelector(".product-description");

const productImage = document.querySelector(".product-image img");
const productName = document.querySelectorAll(".select-product h3")[0];
const relatedProduct = document.querySelectorAll(".product");

let startingPrice = anotherProductPriceContainer.textContent;
let initialPrice = parseInt(startingPrice) * parseInt(quantity.value);
productPriceContainer.innerHTML = initialPrice;


window.onload = priceCalCu();

function priceCalCu(){
    let shippingCost;
    if (initialPrice < 1000){
        shippingCost = 100;
        shippingCostContainer.innerHTML = shippingCost;
        shippingRate.textContent = ""
    } else if (initialPrice >= 1000 && initialPrice <= 20000) {
        shippingCost = 0.15 * initialPrice;
        shippingCostContainer.innerHTML = shippingCost;
        shippingRate.textContent = "(15% of Price)";
    } else if (initialPrice > 20000 && initialPrice <= 100000) {
        shippingCost = 0.20 * initialPrice;
        shippingCostContainer.innerHTML = shippingCost;
        shippingRate.textContent = "(20% of Price)";
    } else {
        shippingCost = 25000;
        shippingCostContainer.innerHTML = shippingCost;
        shippingRate.textContent = ""
    }
    let totalCost = initialPrice + shippingCost;
    totalCostContainer.innerHTML = totalCost;

    displayQuantity.textContent = quantity.value;
}

quantity.addEventListener("input", () => {
    if (quantity.value <= 0){
        quantity.nextElementSibling.textContent = "Please enter a valid quantity";
        productFormBtn.disabled = true;
    } else {
        quantity.nextElementSibling.textContent = "";
        productFormBtn.disabled = false;

        initialPrice = parseInt(startingPrice) * parseInt(quantity.value);
        productPriceContainer.innerHTML = initialPrice;
        priceCalCu();
    }
})

relatedProduct.forEach(product => {
    product.addEventListener("click", () => {
        
        relatedProductImg = product.querySelector(".product-image img")
        productImage.src = relatedProductImg.src;

        relatedProductName = product.querySelectorAll(".product h3")[0];
        productName.textContent = relatedProductName.textContent.toUpperCase();

        relatedProductPrice = product.querySelector(".product h3 span");
        anotherProductPriceContainer.textContent = relatedProductPrice.textContent;

        relatedProductDescription = product.querySelector(".product-description");
        productDescription.innerHTML = relatedProductDescription.innerHTML;
        
        quantity.value = 1;
        startingPrice = anotherProductPriceContainer.textContent;

        initialPrice = parseInt(startingPrice) * parseInt(quantity.value);
        productPriceContainer.innerHTML = initialPrice;
        priceCalCu();
        displayQuantity.textContent = quantity.value;

        if (quantity.value <= 0){
            quantity.nextElementSibling.textContent = "Please enter a valid quantity";
            productFormBtn.disabled = true;
        } else {
            quantity.nextElementSibling.textContent = "";
            productFormBtn.disabled = false;
        }
    })
})

