"use strict";
const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller");
const Services = {
    product: "product",
    search: "search",
    searchById: "searchById",
};
const { product, search, searchById } = Services;
router.get("/", (req, res) => {
    res.status(200).send("Welcome Mercado Backend");
});
router.get(`/${product}/${search}`, (req, res) => {
    const filter = req.query;
    ProductController.searchProduct(filter)
        .then((found) => {
        res.status(200).send({
            success: true,
            found,
        });
    })
        .catch((err) => {
        res.status(500).send({
            success: false,
            message: "Error al buscar productos",
            error: "" + err,
        });
    });
});
router.get(`/${product}/${searchById}`, (req, res) => {
    const filter = req.query;
    ProductController.searchProductById(filter)
        .then((found) => {
        res.status(200).send({
            success: true,
            found,
        });
    })
        .catch((err) => {
        res.status(500).send({
            success: false,
            message: "Error al consultar producto por id",
            error: "" + err,
        });
    });
});
module.exports = router;
