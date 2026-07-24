import { Product } from '../models/Product.js';
import { INITIAL_PRODUCTS } from '../../src/data/mockProducts.js';

export const getProducts = async (req, res) => {
  try {
    let products = [];
    try {
      products = await Product.find({});
    } catch {
      products = [];
    }

    if (!products || products.length === 0) {
      products = INITIAL_PRODUCTS;
    }

    const { category, search } = req.query;
    let filtered = [...products];

    if (category && category !== 'All Products') {
      filtered = filtered.filter(p => p.category === category);
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    return res.json(filtered);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    let product = null;
    try {
      product = await Product.findOne({ id });
    } catch {
      product = null;
    }

    if (!product) {
      product = INITIAL_PRODUCTS.find(p => p.id === id);
    }

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
