const express = require('express')
const app = express()
const PORT = process.env.PORT || 3102
 
if(process.env.NODE.ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'front_end', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'front_end', 'build', 'index.html'))
    });
    
  }