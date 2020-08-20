const categories = ["Taekwondo", "Box", "Kung-Fu", "Karate", "All"];
let products = [
    {
        id: 0,
        category: "Taekwondo",
        name: "TaekwondoUniform",
        price: 33.63,
        isActive: true,
        quantity: 1
    },
    {
        id: 1,
        category: "Tawekwondo",
        name: "Taekwondo Body Protecter",
        price: 44.74,

        isActive: true,
        quantity: 1
    },
    {
        id: 2,
        category: "Taekwondo",
        name: "Head Guard",
        price: 60.00,
        isActive: true,
        quantity: 1
    },
    {
        id: 3,
        category: "Taekwondo",
        name: "Belts",
        price: 10.00,
        isActive: true,
        quantity: 1
    },
    {
        id: 4,
        category: "Taekwondo",
        name: "tkd Uniform",
        price: 10.98,
        isActive: true,
        quantity: 1
    },
    {
        id: 5,
        category: "Taekwondo",
        name: "Hand Protecter",
        price: 10.00,
        isActive: true,
        quantity: 1
    },
    {
        id: 6,
        category: "Taekwondo",
        name: "tkd bag",
        price: 90.20,
        quantity: 1,

        isActive: true,
    },
    {
        id: 7,
        category: "Taekwondo",
        name: "leg protecter",
        price: 18.30,

        isActive: true,
        quantity: 1
    },
    {
        id: 8,
        category: "Taekwondo",
        name: "Training Shoes",
        price: 10.00,
        isActive: true,
        quantity: 1
    },
    {
        id: 9,
        category: "Taekwondo",
        name: "tkd jacket",
        price: 40.80,

        isActive: true,
        quantity: 1
    },
    {
        id: 10,
        category: "Taekwondo",
        name: "Mouth Guard ",
        price: 6.73,

        isActive: true,
        quantity: 1
    },
    {
        id: 11,
        category: "Taekwondo",
        name: "Black belt",
        price: 12.57,

        isActive: true,
        quantity: 1
    },
    {
        id: 12,
        category: "Taekwondo",
        name: "Single Hand Mitt",
        price: 18.04,

        isActive: true,
        quantity: 1
    },
    {
        id: 13,
        category: "Taekwondo",
        name: "Double-Coaching Mitt ",
        price: 27.25,

        isActive: true,
        quantity: 1
    },
    {
        id: 14,
        category: "Taekwondo",
        name: "Arm protecter ",
        price: 27.25,

        isActive: true,
        quantity: 1
    },
    {
        id: 15,
        category: "Taekwondo",
        name: "Coaching Mitt round ",
        price: 27.25,

        isActive: true,
        quantity: 1
    },
    {
        id: 16,
        category: "Taekwondo",
        name: "Teakwondo Uniform ",
        price: 29.30,

        isActive: true,
        quantity: 1
    },
    {
        id: 17,
        category: "Taekwondo",
        name: "Break Board 5 pack ",
        price: 16.50,

        isActive: true,
        quantity: 1
    },
    {
        id: 18,
        category: "Taekwondo",
        name: "tkd tatami",
        price: 31.30,

        isActive: true,
        quantity: 1
    },
    {
        id: 19,
        category: "Box",
        name: "Hand Protecter ",
        price: 82.30,

        isActive: true,
        quantity: 1
    },
    {
        id: 20,
        category: "Box",
        name: "Standing punching Bag ",
        price: 31.30,

        isActive: true,
        quantity: 1
    },
    {
        id: 21,
        category: "Box",
        name: "Boxing ball ",
        price: 31.30,

        isActive: true,
        quantity: 1
    },
    {
        id: 22,
        category: "Box",
        name: "Children's boxing gloves ",
        price: 16.80,

        isActive: true,
        quantity: 1
    },
    {
        id: 23,
        category: "Box",
        name: "Boxing pear",
        price: 31.30,

        isActive: true,
        quantity: 1
    },
    {
        id: 24,
        category: "Box",
        name: "Panching bag kids",
        price: 40.00,

        isActive: true,
        quantity: 1
    },
    {
        id: 25,
        category: "Box",
        name: "Sport mat",
        price: 26.70,

        isActive: true,
        quantity: 1
    },
    {
        id: 26,
        category: "Box",
        name: "Boxing bandages inelastic",
        price: 9.00,
        isActive: true,
        quantity: 1
    },

    {
        id: 27,
        category: "Box",
        name: "Head Protection",
        price: 38.95,
        isActive: true,
        quantity: 1
    },
    {
        id: 28,
        category: "Box",
        name: "Boxing bandages inelastic",
        price: 9.0,
        isActive: true,
        quantity: 1
    },
    {
        id: 29,
        category: "Box",
        name: "Boxing bandages black",
        price: 9.00,
        isActive: true,
        quantity: 1
    },

    {
        id: 30,
        category: "Box",
        name: "Keychain boxing gloves",
        price: 4.41,
        isActive: true,
        quantity: 1
    },

    {
        id: 31,
        category: "Kung-Fu",
        name: "Slipper Kung Fu",
        price: 11.70,
        isActive: true,
        quantity: 1
    },
    {
        id: 32,
        category: "Kung-Fu",
        name: " Kung Fu Jacket",
        price: 30.00,
        isActive: true,
        quantity: 1
    },

    {
        id: 33,
        category: "Kung-Fu",
        name: "Kung-Fu Pants",
        price: 25.70,
        isActive: true,
        quantity: 1
    },

    {
        id: 34,
        category: "Kung-Fu",
        name: "Kong-Fo Jacket",
        price: 11.70,
        isActive: true,
        quantity: 1
    },

    {
        id: 35,
        category: "Kung-Fu",
        name: "Practice Ring",
        price: 18.45,
        isActive: true,
        quantity: 1
    },
    {
        id: 36,
        category: "Kung-Fu",
        name: "SWORD WOOD",
        price: 27.00,
        isActive: true,
        quantity: 1
    },
    {
        id: 37,
        category: "Kung-Fu",
        name: "Kung-Fu Sash",
        price: 9.00,
        isActive: true,
        quantity: 1
    },

    {
        id: 38,
        category: "Kung-Fu",
        name: "sports bottle",
        price: 9.90,
        isActive: true,
        quantity: 1
    },

    {
        id: 39,
        category: "Kung-Fu",
        name: "",
        price: 9.90,
        isActive: true,
        quantity: 1
    },



];





function categoriesbinder() {
    const category = document.getElementById("category");

    for (let i = 0; i < categories.length; i++) {
        const option = document.createElement("option");
        option.innerText = categories[i];

        category.appendChild(option);
    }
}
categoriesbinder();







function catalogBinder() {
    
    let catalog = document.getElementById("catalog");
    
     const currentCategory = document.getElementById("category").value;

    console.log(12, currentCategory);

    if (currentCategory === 'All') {
        items = [];
        products.forEach((item) => {
            if (item.isActive) items.push(item)
        })
    } else {
        items = [];
        products.forEach((item) => {
            if (item.isActive && item.category === currentCategory) items.push(item)

        })
       
        
    }


    console.log('the length of items is : ', items.length);


    //check the length
    if (items.length > 0) {
        showCatalog(items);
    } else if (currentCategory !== "please choose") {
        let notfound = document.createElement("h4");
        notfound.textContent = "there is no product in this category"
        notfound.classList = "alert alert-danger"  // use bootstrap class
          

       
           
                  

        catalog.appendChild(notfound); // appendChild notfound To catalog
    }
}
catalogBinder();




function showCatalog(product) {
    let catalog = document.getElementById("catalog");
    catalog.innerHTML = " ";

    for (let i = 0; i < product.length; i++) {
        let box = document.createElement("div");

        box.classList.add("box");

        let image = document.createElement("img");
        image.src = "/img/" + product[i].id + ".jpg";
        image.classList.add("img1");
        image.alt = product[i].name;
        box.appendChild(image);
        catalog.appendChild(box);
        let name = document.createElement("h4");
        name.innerText = product[i].name;            //take the name key  from the single Object
        box.appendChild(name);
        price = document.createElement("div");
        let span = document.createElement("span");
        span.innerText = "Price :" + " " + product[i].price.toFixed(2) + "€";
        span.className = 'price-span'
        price.appendChild(span)
            ;

        const add = document.createElement("button");
        add.type = "button";
        add.innerText = "ADD";
        add.classList = "btn btn-info addbag";
        add.classList.add("btn2");
        add.addEventListener('click', () => {     // clicking on the button is only one time possible


            add.disabled = true;

            add.style.backgroundColor = "red";

            add.textContent = "inCart";

            cartNumbers(product[i]);
            totalCost(product[i]);

        })
        price.appendChild(add)
        box.appendChild(price)




    }

}
//How many  items are ihe cart /  navbar ???


function quantity() {

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

onLoadCartNumbers();

//localStorage  How many items are in the Cart
function cartNumbers(product) {
    console.log("the product clicked is", product);
    let productsNumber = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productsNumber);

    if (productsNumber) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;    //make changes in the Navbar 
    } else {
        localStorage.setItem("cartNumbers", 1);                                //for the first time 
        document.querySelector(".cart span").textContent = 1;
    }

    setItems(product);
}




// How I set the products in localStorage

function setItems(product) {
    let cartItems;
    if (localStorage.getItem("productsInCart") !== null) {            // there is an item in the Cart
        cartItems = JSON.parse(localStorage.getItem("productsInCart"))  

    }
    else {
        cartItems = []

    }
    cartItems.push(product)
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))  //transforms a Java Script Object into a JSon String

}




function totalCost(product) {
    console.log("the product price is", product.price);
    // localStorage.setItem("totalCost", product.price);
    let cartCost = localStorage.getItem("totalCost");

    console.log(cartCost + "cartCost")

    console.log("My CartCost is", cartCost);
    if (cartCost !== null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", (cartCost + Number(product.price)).toFixed(2));
    } else {
        localStorage.setItem("totalCost", Number(product.price).toFixed(2));
    }
}

//display Cart
let productContainer = document.querySelector(".products-container");
function displayCart() {
    // let cartCost = localStorage.getItem("totalCost");
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));  
    console.log('productsInCart from local Storage is : ', cartItems);


    console.log(productContainer);

    if (cartItems && productContainer) {

        productContainer.innerHTML = " ";

        cartItems.map((item) => {
            productContainer.innerHTML += `<div class="product" data-id="${item.id}">

                <div> <i class="far fa-times-circle remove">remove</i> </div>
                <div> <img class="images" src="/img/${item.id}.jpg"></div>
                <div> <span class="name">${item.name}</span></div>
                <div class="price">${item.price.toFixed(2)} €</div>
                <input class ="quantity"  value="${item.quantity}" type=number>  



                                              </div>`;

        });


    }
    let contentCost = localStorage.getItem("totalCost");

     if (contentCost) {

        const totalSpan = document.querySelector(".t-total span");
         if(totalSpan !== null){
         document.querySelector(".t-total span").textContent = contentCost;
          }
        

     }

}



displayCart();



//delete an item

//
const productsremove = document.querySelector(".products-container");
console.log('productsremove: ', productsremove);

if (productsremove !== null) {
    productsremove.addEventListener("click", removebtn);
}


function removebtn(e) {
    let productsNumber = localStorage.getItem("cartNumbers");
    let buttonClicked = e.target;

    console.log(e.target)
    // const id = e.target.parentElement.parentElement.dataset.id;

    if (buttonClicked.classList.contains("remove")) {
        console.log("target is :", buttonClicked);
        const agree = confirm("Are you sure you want to remove this item?");

        if (agree) {
            buttonClicked.parentElement.parentElement.remove();
            const currentProduct = buttonClicked.parentElement.parentElement.getAttribute(
                "data-id"
            );

            //remove  from localStorage 
            const data = JSON.parse(localStorage.getItem("productsInCart"));
            console.log(data + "data");
            data.forEach((item, index) => {
                if (item.id == currentProduct) {
                    data.splice(index, 1);
                    localStorage.setItem('productsInCart', JSON.stringify(data));
                }


            })
            productNumbers = parseInt(productsNumber);
            if (productsNumber > 0) {
                productsNumber = productsNumber - 1;
                console.log("new" + productsNumber);

            }

            localStorage.setItem("productsInCart", JSON.stringify(data));
            localStorage.setItem("cartNumbers", productsNumber);

            let newproductNumbers = localStorage.getItem("cartNumbers");

            document.querySelector(".cart span").textContent = newproductNumbers;






            if (productsNumber == 0) {

                localStorage.clear();
            }
        }

    }
    updateCartTotal();
}
//



function updateCartTotal() {
    let product1 = document.getElementsByClassName("product");
    console.log(product1 + "new");

    let total = 0;

    for (let i = 0; i < product1.length; i++) {
        let priceElement = product1[i].children[3];
        console.log(priceElement + "Element");

        let quantityElement = product1[i].children[4];
        console.log(product1[i]);
        let q = quantityElement.value;

        let price = parseFloat(priceElement.innerText);
        console.log(price);

        total = total + price * q;
        console.log(total)
    }

    total = total.toFixed(2)



    localStorage.setItem("totalCost", total);
   

     let totalCostNav = localStorage.getItem("totalCost");
    const totalnav= document.querySelector(".t-total span")
   if(totalnav!=null){
         totalnav.textContent = totalCostNav;
   }
     

    
}


//change quantity 

const productsDiv = document.querySelector(".products-container");
if (productsDiv !== null) {
    productsDiv.addEventListener("change", changeQty);
}

function changeQty(e) {
    if (e.target.className === "quantity") {
        //console.log(e.target);
        let input = e.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal();


        //change Quantity in localStorage
        let cartItemQuantity;

        const currentProduct = input.parentElement.getAttribute(
            "data-id"
        );

        console.log(currentProduct + "quantity")
        // const inputQ = document.querySelector(".quantity")
        cartItemQuantity = JSON.parse(localStorage.getItem("productsInCart"))
        if (cartItemQuantity !== null)
            cartItemQuantity.forEach((item) => {
                if (item.id == currentProduct)
                    item.quantity = Number(input.value);
            })

        localStorage.setItem("productsInCart", JSON.stringify(cartItemQuantity))






    }


}


