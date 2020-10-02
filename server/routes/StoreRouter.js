const express = require("express");
const furnitureModel = require("../models/FurnitureModel");
const clothingModel = require("../models/ClothingModel");
const electronicModel = require("../models/ElectronicModel");
const _2ndModel = require("../models/2ndModel");
const fitnessModel = require("../models/FitnessModel");
// const storeModel = require("../models/StoreModel");

const app = express();
//get specific store

//get store from clothing
app.get("/clothing", async (req, res) => {
  const store = await clothingModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});
// get store from electronic
app.get("/electronic", async (req, res) => {
  const store = await electronicModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});
// Get store from fitness
app.get("/fitness", async (req, res) => {
  const store = await fitnessModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});
// get store from Furniture
app.get("/furniture", async (req, res) => {
  const store = await furnitureModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});
//Get store from 2nd Product
app.get("/second-hand-product", async (req, res) => {
  const store = await _2ndModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});
//Search in collection

//search Secondhand product
app.get("/second-hand-product/search/:store_name", async function (req, res) {
  var regex = new RegExp(req.params.store_name, "i");
  const store = await _2ndModel.find({ store_name: regex });
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Search in clothing

app.get("/clothing/search/:store_name", async function (req, res) {
  var regex = new RegExp(req.params.store_name, "i");
  const store = await clothingModel.find({ store_name: regex });
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});

//search electronic
app.get("/electronic/search/:store_name", async function (req, res) {
  var regex = new RegExp(req.params.store_name, "i");
  const store = await electronicModel.find({ store_name: regex });
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});
//search furniture
app.get("/furniture/search/:store_name", async function (req, res) {
  var regex = new RegExp(req.params.store_name, "i");
  const store = await furnitureModel.find({ store_name: regex });
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});

//search fitness
app.get("/fitness/search/:store_name", async function (req, res) {
  var regex = new RegExp(req.params.store_name, "i");
  const store = await fitnessModel.find({ store_name: regex });
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
