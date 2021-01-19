const express = require('express')
const app = express()
const port = 3001

app.get('/people', (req, res) => {
  return res.json([
    { id: 1, firstName: 'Greg', lastName: 'Swan' },
    { id: 2, firstName: 'Somebody', lastName: 'Else' }
  ])
})
app.get("/",(req,res)=>{
    app.use(express.static(__dirname+"/client/build/static"));            //required for css and js
    app.use(express.static('./client/build/', express.static('static')));  //required for images and fonts
    res.sendFile(__dirname + "/client/build/index.html");
})

app.listen(port, () => {
  console.log(`Logging ANOTHER_ENV_VAR: ${process.env.ANOTHER_ENV_VAR}`)
  console.log(`Example app listening at http://localhost:${port}`)
})
