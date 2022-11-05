let products = {
    data: [
        {
            productName: "Cake1",
            category: "Wedding",
            price: "400",
            image: "images/cake.png"
        },
        {
            productName: "Cake2",
            category: "Wedding",
            price: "400",
            image: "images/hi.png"
        },
        {
            productName: "Cake3",
            category: "Wedding",
            price: "400",
            image: "images/hi.png"
        },
    ]
};

for(let i of products.data){
    //create Card
    let card = document.createElement("div");
    //card should have category and should stay hidden initially
    card.classList.add("card", "i.category", "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card); 
}



//parameter passed from button (parameter same as category)
function filterProduct(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button) = () => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    }
}

//initially display all products
window.onload = () => {

}

