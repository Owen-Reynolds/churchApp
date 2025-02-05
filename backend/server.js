const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/church-app/src')));


app.get('/', (req, res) => {
  res.status(200);
  res.send("Hello World 2");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});