const express = require('express')
const app = express()
const port = 3001

app.get('/people', (req, res) => {
  return res.json([
    { id: 1, firstName: 'Greg', lastName: 'Swan' },
    { id: 2, firstName: 'Somebody', lastName: 'Else' }
  ])
})

app.listen(port, () => {
  console.log(`Logging ANOTHER_ENV_VAR: ${process.env.ANOTHER_ENV_VAR}`)
  console.log(`Example app listening at http://localhost:${port}`)
})
