const express=require('express')
const app=express()
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('weather app is running at http://localhost:3000');
});