require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const prodRoutes = require('./routes/prodRoutes');
const recRoutes = require('./routes/recRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.use('/user', userRoutes);

app.use('/detail-product/:productId', prodRoutes);

app.use('/recommendation', recRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});