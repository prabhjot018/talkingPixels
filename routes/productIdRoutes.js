var express = require('express');

var routes = function (Product) {
    var productRouter = express.Router();
    productRouter.all('/:productId', function (req, res, next) {
        Product.findById(req.params.productId, function (err, product) {
            if (err) {
                res.status(500).send(err);
            } else if (product) {
                req.product = product;
                next();
            } else {
                res.stauts(404).send("Product not found");
            }
        })
    })
    productRouter.route('/:productId')
        .get(function (req, res) {
//  res.status(200).send(jsonify(req.product));
            res.json(req.product);
        })
        .put(function (req, res) {
            req.product.productDL = req.body.productDL;
            req.product.price = req.body.price;
            req.prouduct.userId = req.body.userId;
            req.product.name = req.body.name;
            req.product.description = req.body.description;
            req.product.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.json(req.product);
                }
            })
        })
        .patch(function (req, res) {
            if (req.body._id)
                delete req.body._id;
            for (var p in req.body) {
                req.product[p] = req.body[p];
            }
            req.product.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(product);
            })
        })
        .delete(function (req,res) {
            req.product.remove(function(err){
              if(err)
              res.status(500).send(err);
              else {
                res.status(204).send('product deleted');
              }
            })
        });
        return productRouter;
};
module.exports = routes;
