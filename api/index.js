const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('test');
  });

  app.post("/api/transaction", (req, res) =>{

  });

  app.listen(4040, () => {
    console.log('Server started on port 3000');
  });
  