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
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}


//MongoDB connection
const PORT = process.env.PORT || 10000;
const dbURI = 'mongodb://127.0.0.1:27017/progress-DB';

mongoose.connect('mongodb://127.0.0.1:27017/progress-DB')
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


