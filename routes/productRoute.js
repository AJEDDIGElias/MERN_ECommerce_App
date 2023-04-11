import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productFiltersController, productPhotoController, updateProductController, productCountController, productListController, searchProductController, relatedProductController, productCategoryController, braintreeTokenController, brainTreePaymentController } from "../controllers/productController.js";
import formidable from 'express-formidable'; //fields & file 

const router = express.Router();

//routes
//create product
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

//update product
router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProductController);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//Filter Product
router.post('/product-filters', productFiltersController);

//Count Product
router.get('/product-count', productCountController);

//Product per page
router.get('/product-list/:page', productListController);

//Search Product
router.get('/search/:keyword', searchProductController);

//Similar Products 
router.get('/related-product/:pid/:cid', relatedProductController);

//Category's Product List
router.get('/product-category/:slug', productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);;

export default router;