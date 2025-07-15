// const express=require('express')
// const app=express()

// app.get('/',(req,res)=>{
//     res.send("hello welcome")
// })
// app.get('/about',(req,res)=>{
//     res.send("hello everyone")
// })
// // app.use((req,res)=>{
// //     res.status(404).send("invalid")-use in unmateched route handling
// // })
// app.listen(3000,()=>console.log("server is running on 3000 port"))

// //In this case its in same routing so to search top - bottom .later it will take only the match route,
// // otherwise it will   an error not found

//unmatched route handling
const express = require('express');
const app = express();
const PORT = 3000;

// Defined routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// 👇 Handle unmatched routes (404)
// app.use((req, res) => {
//   res.status(404).send('404 Not Found - This route does not exist.');
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
