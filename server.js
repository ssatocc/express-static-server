require('dotenv').config();

const express = require('express');
const basicAuthMiddleware = require('./basicAuthMiddleware');

const app = express();

app.set('port', process.env.PORT || 3000);
if (process.env.BASIC_AUTH_USER && process.env.BASIC_AUTH_PASSWORD) app.use(basicAuthMiddleware);
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () =>{
    console.log('Server listening on port %s', app.get('port'));
}).on('error', (err) => {
    console.error('Server error: ', err);
});
