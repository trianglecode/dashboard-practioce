
let manageBtn = document.getElementById("mgBtn");
let AdmDiv = document.getElementById("AdminDiv");
let saveBtn = document.getElementById("saveBtn");
let cardsArea = document.getElementById("cardsArea");



$(document).ready(function(){
    $("#mgBtn").click(function(){
      $("#AdminDiv").slideToggle();
    });
});


saveBtn.addEventListener("click", function(){
    let cardName = document.getElementById("cardName").value;
    let cardPrice = document.getElementById("cardPrice").value;
    let cardImgSrc = document.getElementById("cardImgSrc").value;

    class Product {
        constructor(name, price, image) {
            this.name = cardName;
            this.price = cardPrice;
            this.image = cardImgSrc;
        }
    }

    const product = new Product(
        cardName,
        cardPrice,
        cardImgSrc
    );

    console.log(product);

    cardsArea.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <div class="productCard bg-light rounded border border-warning h-100 p-3">
        
                        
                        <div class="imgDiv text-center">
                            <img
                                class="cardImg rounded"
                                src="img/${product.image}.jpg"
                                alt="${product.name}"
                            >
                        </div>
        
                        
                        <div class="cardCaption text-center mt-3">
        
                            <p class="productCaption mb-2">
                                ${product.name}
                            </p>
        
                            <p class="h4 mb-3">
                                ${product.price}
                            </p>
        
                        </div>
        
                        
                        <div class="text-center">
                            <button class="btn btn-success border-warning shineEffect px-4">
                                BUY
                            </button>
                        </div>
        
                    </div>
        
                </div>
        </div>
    
    `
});