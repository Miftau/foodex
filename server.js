const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./back_end/routes/auth');
const itemRoutes = require('./back_end/routes/item');
const cartRoutes = require('./back_end/routes/cart');
const orderRoutes = require('./back_end/routes/order');
const path = require('path')
const helmet = require('helmet');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use('/api', authRoutes);
app.use('/api', itemRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);



//production environment
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('static/build'));
    app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname,'build','public','index.html'));
    });
}

app.use(cors({
  origin: 'https://food-ex-nu.vercel.app/',
  credentials: true
}))

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}

module.exports = allowCors(handler)


//MongoDB connection
const PORT = process.env.PORT || 3000;
const dbURI = 'mongodb+srv://foodex:Edtnbv4PGwawOC3o@cluster0.0be1vld.mongodb.net/';

mongoose.connect('mongodb+srv://foodex:Edtnbv4PGwawOC3o@cluster0.0be1vld.mongodb.net/')
.then(() => console.log('Database connected successfully'))
.catch(err => console.log(err.message))

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result =>
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
  )
  .catch(err => console.log(err)); 


