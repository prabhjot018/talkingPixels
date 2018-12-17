var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost:8090/talkingPixels');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
//
app.use(bodyParser.json());
var User = require('./models/userModel');
var userRouter = require('./routes/userRoutes')(User);
var Product = require('./models/productModel');
var productRouter = require('./routes/productRoutes')(Product);
var productRouterId = require('./routes/productIdRoutes')(Product);

app.use('/api/users',userRouter);
//app.use('/api/products',productRouter);
// app.use('/api/products',productRouterId);
app.get('/', function (req,res) {
   res.send("Welcome to my api");
});


app.listen(port, function () {
    console.log('application is running on ' + port);
});
