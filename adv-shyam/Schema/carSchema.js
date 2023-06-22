const mongoose = require ("mongoose");
const { Schema } = mongoose;
const validator = require('validator');

//car information = owner, model, company, cc, color, year

const carSchema = new Schema({
  owner: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  cc: {
    type: Number,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    trim: true,
  },
  }, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

 
  module.exports = carSchema;
