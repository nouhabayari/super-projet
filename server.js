const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config({path: './config/.env'});
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

const {checkUser,requireAuth} = require('./middleware/auth.middleware');


const app = express();
require('./config/db');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser());
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
  });


app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);




 app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})