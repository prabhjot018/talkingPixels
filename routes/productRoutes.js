var express = require('express');


var routes = function (Product) {
    var productRouter = express.Router();
    productRouter.route('/')
        .get(function (req, res) {
            var query = {};
            if (req.query.userId) {
                query.userId = req.query.userId;
            }
            if (req.query.productId) {
                query.productId = req.query.productId;
            }
            Product.find(query, function (err, products) {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    res.json(products);
                }
            })
        })
        .post(function (req,res) {
        var product = new Product(req.body);
        product.save(function (err) {
            if (err) {
                console.log(err);
                req.status(500).send(err);
            }
            req.status(201).send(product);
        });
    });
};

module.exports = routes;
