console.log('we are in script js')

const hamburger = document.getElementById('ham-menu');
const navMenu = document.getElementById('nav-menu');

console.log('hamburger',hamburger);
console.log(` ${navMenu}`)

hamburger.addEventListener('click', toggleHamburgerMenu);

navMenu.addEventListener('click', toggleHamburgerMenu);

function toggleHamburgerMenu(){

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

fetch('https:dummyjson.com/products')
 .then(response => 
    response.json())
 .then (data => {
    const products = data.products;
    const firstProduct = products[25];
    const productPhotos = firstProduct.images;
    console.log('Product photos:', productPhotos)
 })
 .catch(error =>{
    console.log('Error ', error)
 })

 