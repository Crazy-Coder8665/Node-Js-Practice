const express = require('express');
const authApi = require('./routes/authApi');
const userApi = require('./routes/userApi');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', authApi);
app.use('/api/users', userApi);

app.listen(port, () => console.log('Server is Running'));
