import express from "express";

import {
  deleteProduct,
  createProducts,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
const router = express.Router();


router.get("/", getProducts);
router.post("/", createProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
