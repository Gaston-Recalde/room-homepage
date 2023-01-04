const closeNav = document.querySelector('.main__close');
const openNav = document.querySelector('.main__hamburger');
const logo = document.querySelector('.main__logo');
const nav = document.querySelector('.main__nav');

// Nav
openNav.addEventListener('click', () => {
    closeNav.style.display = 'inline-block';
    openNav.style.display = 'none';
    logo.style.display = 'none';
    nav.classList.add('main__nav-active');
});

closeNav.addEventListener('click', () => {
    closeNav.style.display = 'none';
    openNav.style.display = 'inline-block';
    logo.style.display = 'inline-block'
    nav.classList.remove('main__nav-active');
});

// Slider
var index = 0;
const imageContainer = document.querySelector(".slide__image");
const imageMobileContainer = document.querySelector(".slide__image-mobile");
const slideContent = document.querySelector(".main__content");
const textContainer = document.querySelector(".main__paragraph");
const titleContainer = document.querySelector(".main__title");
const content = [{ 
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: "./images/desktop-image-hero-1.jpg",
    imgMobile: "./images/mobile-image-hero-1.jpg",
  },
  { 
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: "./images/desktop-image-hero-2.jpg",
    imgMobile: "./images/mobile-image-hero-2.jpg",
  },
  { 
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: "./images/desktop-image-hero-3.jpg",
    imgMobile: "./images/mobile-image-hero-3.jpg",
}];

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener("click", function(event){
    reduce();
});

next.addEventListener("click", function(event){
    increase();
});

const reduce = () => {
    index--;
    if(index < 0){
      index = content.length - 1;
    }
    addContent(index);
}

const increase = () => {
    index++;
    if(index > content.length - 1){
      index = 0;
    }
    addContent(index);
}

const addContent = (i) => {
    imageContainer.src = content[i].img;
    imageMobileContainer.src = content[i].imgMobile;
    textContainer.innerHTML = content[i].text;
    titleContainer.innerHTML = content[i].title;
}