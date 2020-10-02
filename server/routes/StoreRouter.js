const express = require("express");
const furnitureModel = require("../models/FurnitureModel");
const clothingModel = require("../models/ClothingModel");
const electronicModel = require("../models/ElectronicModel");
const _2ndModel = require("../models/2ndModel");
const fitnessModel = require("../models/FitnessModel");

const app = express();
//get specific store
app.get("/clothing", async (req, res) => {
  const store = await clothingModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/electronic", async (req, res) => {
  const store = await electronicModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/fitness", async (req, res) => {
  const store = await fitnessModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/furniture", async (req, res) => {
  const store = await furnitureModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/second-hand-product", async (req, res) => {
  const store = await _2ndModel.find({});
  try {
    res.send(store);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = app;
