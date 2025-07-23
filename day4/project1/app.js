
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

// Serve static files only from public folder
app.use(express.static(path.join(__dirname)))

const products = [
  { name: 'OUDH', price: 3999, image: './images/perfume2.jpeg' },
  { name: 'EAU D EAR', price: 1299, image: './images/perfume3.jpeg' },
  { name: 'Asthetic', price: 1999, image: './images/perfume4.jpg' },
  {name:'Reddish-OUDH',price:2000,image:'./images/perfume-bottle.avif'}
];

app.get('/products', (req, res) => {
  res.render('products', { products });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/products');
});














// const express = require('express');
// const app = express();
// const path=require('path')
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname)))


// const products = [
//   { name: 'Perfume', price: 399, image: '' },
// //   { name: 'Blue Hoodie', price: 799, image: 'EvyLqHLiYu0QjVUCUwGQJ8V3vK7UQTrJFX2xpg' },
//   { name: 'Sneakers', price: 1299, image: 'https://via.placeholder.com/150?text=Sneakers' },
//   { name: 'Jeans', price: 999, image: 'https://via.placeholder.com/150?text=Jeans' }
// ];


// app.get('/products', (req, res) => {
//   res.render('products', { products });
// });

// // Start Server
// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/products');
// });

