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
    enum: ['Audi', 'Honda', 'Toyota', 'Mercedes'],
  },
  cc: {
    type: Number,
    required: true,
    trim: true,
    min: 1000,
    max: 15000
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
    min: 1990,
    max: 2023
  },
  isitReadytoResale: {
    type: Boolean,
    required: true,
    trim: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
    trim: true,
    min: 10000,
    max: 1000000
  },
  }, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

 
  module.exports = carSchema;
