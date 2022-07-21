const express=require('express');

const router = express.Router();

router.get("/",getOrders);
router.patch("/:id",update)
