const express = require('express')()
require("./schema")
const mongoose= require('mongoose')
const {mongoUrl}= require('./mongoUrl')



const flowers = mongoose.model("flowers")
// const app = express()
const port = 3000

// express.get('/', (req, res) => {
//   mongoose.connect(mongoUrl);
//   const pro=new flowers({
//       botanicalName:'tulipoo'
//   })
//   pro.save();
//   mongoose.connection.close();
//   res.send('Hello World!')
// })

express.get('/all_flowers', async ( req, res ) => {

  mongoose.connect(mongoUrl);

  const allFlowers = await flowers.find();
  console.log(allFlowers);
  // mongoose.connection.close();
  res.json({ "flowers" : allFlowers })

})

express.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})