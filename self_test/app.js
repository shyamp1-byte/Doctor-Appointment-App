const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/numbers', (req, res) => {
    for (let x=0;x<10;x++) {
        if (x % 2 ==0) {
            console.log(x+ " is even")
        } else {
            console.log(x+ " is odd")
        }
    }
  res.send('Numbers will be printed here soon')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
