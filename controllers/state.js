const express = require("express" )
const State = require("../models/states");
const routes = require("express").Router();
const db = require('../config/database')


routes.post("/", async (req, res) => {
  // console.log('Create Route');
  try {
    const state = await State.create(req.body);
    res.status(200).json({ state });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// GET ALL STATE
routes.get("/", async (req, res) => {
  try {
    const Allstate = await State.findAll();
    res.status(200).json({ Allstate });
    // console.log(Allstate);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// GET A SINGLE STATE
routes.get("/:id", async (req, res) => {
  // console.log("Get a state");
  let id = req.params.id;
  try {
    const state = await State.findByPk(id);
    res.status(200).json({ state });
  } catch (error) {
    res.status(500).json({ error });
  }
});



module.exports = routes;
