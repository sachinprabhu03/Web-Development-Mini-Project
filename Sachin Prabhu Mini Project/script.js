// Sample product data (replace with your own)
const products = [
    { id: 1, name: 'Airpods', price: 10, image: 'airpods.jpeg' },
    { id: 2, name: 'Samsung Mobile Phone', price: 150, image: 'Samsung.jpg' },
    { id: 3, name: 'Headphone', price: 30, image: 'headphones.jpg'}
    
     
  ];
  
  // Function to display products
  function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      
      productList.appendChild(productDiv);
    });
  }
  
  // Function to add product to cart (dummy function for now)
  function addToCart(productId) {
    alert(`Product ${productId} added to cart`);
  }
  
  // Call displayProducts function when the page loads
  window.onload = displayProducts;
  