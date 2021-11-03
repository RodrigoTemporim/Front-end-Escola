const express = require('express')
const app = express()
const PORT = process.env.PORT || 3102
 
app.use(express.static('build'))
app.listen(PORT, () => console.log('Servidor Front em execução!'))