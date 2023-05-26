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
   //  const product25 = products[25];
   //  const productPhotos = product25.images;
   const productIds = [15, 16, 17,26,25,27];
    productIds.forEach((productId) => {
      const imageElement = document.getElementById(`product-${productId}`);
      console.log('imageElement:', imageElement);
      imageElement.addEventListener('click', () => {
        renderSlider(products[productId - 1].images);
        renderProductDetails(products[productId - 1]);
      });
    })

    renderSlider(productPhotos);
    renderProductDetails(product25);
    console.log('Product photos:', productPhotos)
 })
 .catch(error =>{
    console.log('Error fetching product data: ', error)
 });


 function renderSlider(photos){
   const slider = document.getElementById('slider');
   slider.innerHTML = '';

   console.log("in renderSlider:", photos)

   photos.slice(0,4).forEach((photoUrl) => {
      const image = document.createElement('img');
      image.src = photoUrl;
      slider.appendChild(image)
      
   });

   const pagination = document.getElementById('pagination');
   pagination.addEventListener('click', handlePaginationClick);

   function handlePaginationClick(event){
      const clickedDot = event.target;
      console.log(event)
      if(clickedDot.classList.contains('page-dot')){
         const index = parseInt(clickedDot.dataset.index);
         scrollToIndex(index)
      }
   }

   function scrollToIndex(index){
      const scrollAmount = index * slider.offsetWidth;
      slider.scrollTo({
         left: scrollAmount,
         behavior : 'smooth'
      })
   }
 }

function renderProductDetails(product){

   const titleElement = document.getElementById('product-title')
   const descriptionElement = document.getElementById('product-description')
   const priceElement = document.getElementById('product-price');
   titleElement.innerText = product.title;
   descriptionElement.innerText = product.description;
   priceElement.innerText = `EUR ${product.price}`;

   const buyBtn = document.getElementById('buy-btn');
   buyBtn.addEventListener('click',alertOnclick);

   function alertOnclick(){
      alert(`${product.title} for EUR ${product.price} has been added to you`)
   }

}

 