const express = require("express");
const router = express.Router();

const {getProductById, createProduct, getProduct, photo, deleteProduct, updateProduct, getAllProducts, getAllUinqueCategories} = require("../controllers/product");
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/authentications");
const {getUserById} = require("../controllers/user");

//all of params:
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes:
//create route:
router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);

//read route:
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete route:
router.delete("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, deleteProduct);

//update route:
router.put("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, updateProduct);

//listing route:
router.get("/products", getAllProducts);

//get all categories
router.get("/products/categories", getAllUinqueCategories);

module.exports = router;