const express = require('express');
const cors = require('cors');

const app = express();

const authRoutes = require('./controllers/auth');

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req,res)=>{
    res.json('Hello World')
});

module.exports = { app };
