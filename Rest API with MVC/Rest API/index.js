const express = require('express')

const mongoose = require('mongoose')

const UserRoutes = require('./routes/userRoutes')

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/contacts', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/users', UserRoutes);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})