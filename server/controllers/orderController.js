import { Order } from '../models/Order.js';

let inMemoryOrders = [];

export const createOrder = async (req, res) => {
  const newOrderData = {
    orderId: `NX-${Math.floor(100000 + Math.random() * 900000)}`,
    ...req.body,
    createdAt: new Date().toISOString()
  };

  try {
    const order = new Order(newOrderData);
    await order.save();
    return res.status(201).json(order);
  } catch (error) {
    inMemoryOrders.unshift(newOrderData);
    return res.status(201).json(newOrderData);
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    return res.json(orders.length > 0 ? orders : inMemoryOrders);
  } catch {
    return res.json(inMemoryOrders);
  }
};
