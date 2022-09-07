const wrapper=document.querySelector(".sliderwrapper");
const menuItems=document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: "Rs.2999",
      colors: [
        {
          code: "white",
          image: "./image/Airforce.webp",
        },
        // {
        //   code: "gray",
        //   image: "./image/Airforcegray.webp",
        // },
      ],
    },
    {
      id: 2,
      title: "Jordan",
      price: "Rs.2599",
      colors: [
        {
          code: "black",
          image: "./image/jordanwhite.webp",
        },
        // {
        //   code: "yellow",
        //   image: "./image/jordanyellow.webp",
        // },
      ],
    },
    {
      id: 3,
      title: "Air jordan",
      price: "Rs.2689",
      colors: [
        {
          code: "yellow",
          image: "./image/airjordan.webp" ,
        },
        // {
        //   code: "red",
        //   image: "./image/airjordanred.png",
        // },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: "Rs.2790",
      colors: [
        {
          code: "brown",
          image: "./image/jordanbrown.webp",
        },
        // {
        //   code: "grey",
        //   image: "./image/cratergrey.webp",
        // },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: "Rs.2299",
      colors: [
        {
          code: "pink",
          image: "./image/jordanpink.webp" ,
        },
        // {
        //   code: "black",
        //   image: "./image/hippiered.png",
        // },
      ],
    },
  ];
  
  let choosenProduct = products[0];
  
  const currentProductImage = document.querySelector(".productImage");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  
  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-50 * index}vw)`;
      //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImage.src = choosenProduct.colors[0].image;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
    });
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

