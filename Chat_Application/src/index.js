const express = require('express');
const api = require('./middlewares/auth');


const app = express();

app.use(express.urlencoded({ extended: 'false' }));
app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Talha' });
});
app.get('/login', (req, res) => {
  res.render('login.ejs');
});
app.get('/register', (req, res) => {
  res.render('register.ejs');
});
app.use('/user', api);

app.listen(3000);
