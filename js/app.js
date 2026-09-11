
let manageBtn = document.getElementById("mgBtn");
let adminDiv = document.getElementById("AdminDiv");
let saveBtn = document.getElementById("saveBtn");
let cardsArea = document.getElementById("cardsArea");


class Product {

    constructor(name, price, image) {

        this.name = name;

        this.price = price;

        this.image = image;

    }

}


$(document).ready(function () {

    $("#mgBtn").click(function () {

        $("#AdminDiv").slideToggle(300);

    });

});

function createProductCard(product) {

    return `

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">

            <div class="productCard">

                <!-- Image -->

                <div class="imageWrapper">

                    <img
                        class="cardImg"
                        src="img/${product.image}.jpg"
                        alt="${product.name}"
                    >

                </div>


                <!-- Product Information -->

                <div class="cardContent">

                    <h5 class="productName">

                        ${product.name}

                    </h5>


                    <p class="productPrice">

                        ${product.price}$

                    </p>

                </div>


                <!-- Buy Button -->

                <button
                    class="btn btn-success buyBtn"
                >

                    BUY

                </button>

            </div>

        </div>

    `;

}


saveBtn.addEventListener("click", function () {


    let cardName =
        document.getElementById("cardName").value.trim();


    let cardPrice =
        document.getElementById("cardPrice").value.trim();


    let cardImgSrc =
        document.getElementById("cardImgSrc").value.trim();


    if (
        cardName === "" ||
        cardPrice === "" ||
        cardImgSrc === ""
    ) {

        alert("Please fill all fields.");

        return;

    }


    const product = new Product(

        cardName,

        cardPrice,

        cardImgSrc

    );


    console.log(product);

    cardsArea.insertAdjacentHTML(
        "beforeend",

        createProductCard(product)
    );


    document.getElementById("cardName").value = "";
    document.getElementById("cardPrice").value = "";
    document.getElementById("cardImgSrc").value = "";


});