const productImage = document.querySelectorAll(".product-control .product-image");

Array.from(productImage).forEach(function(productImageItem){
    productImageItem.addEventListener("mouseenter", function(){
        const image = productImageItem.querySelector("img");
        // console.log(image.getAttribute("src"));
        productHovered = image.getAttribute("src");
        const productImage = document.querySelector(".product .product-image img");
        productImage.src = productHovered;
    })
})
