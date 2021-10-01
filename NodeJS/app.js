const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome!')
})
app.get('/home', (req, res)=> {
   console.log("homepage");
   res.send('Home');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
