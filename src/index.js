const express = require('express');
const app = express();

//Setting
app.set('port', process.env.PORT || 3000)

//Middlewares

//Routes


// Static files


//Server is listennig
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})