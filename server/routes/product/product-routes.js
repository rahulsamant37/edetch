const express = require('express');
const Product = require('../../models/Product');

const router = express.Router();

router.get('/get15', async (req, res) => {
  try {
    const products = await Product.find().limit(15);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/getProductsByCategory', async (req, res) => {
  const { subCategory } = req.query;

  try {
    const products = await Product.find({
      subCategory: new RegExp(`^${subCategory}$`, 'i'),
    });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

module.exports = router;
