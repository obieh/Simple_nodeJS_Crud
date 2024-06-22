const express = require('express')
const mongoose = require('mongoose');
const app = express()


app.use(express.json());
//app.listen(5500, () => {
//   console.log('Server is running on port 5500');
//});

app.get('/', (req, res) => {
  res.send("Hello from shenk node server API updated");
});

app.post('/api/products', (req, res) => {
  console.log(req.body);
  res.send(req.body); 
});

mongoose.connect('mongodb+srv://admin:EdhKb89MQm4d85gB@clust0.u7kreyj.mongodb.net/?retryWrites=true&w=majority&appName=Clust0')
.then(() => {
  console.log("connected to database");
  app.listen(5500, () => {
    console.log('Server is running on port 5500');
  })
})
.catch(() => {
  console.log ('Connection failed');
});