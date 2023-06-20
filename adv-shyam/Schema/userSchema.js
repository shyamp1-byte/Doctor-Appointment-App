<<<<<<< HEAD
const mongoose = require('mongoose');
const {Schema} = mongoose;
const validator = require('validator');


const userSchema = new Schema({
  fullName: {
    firstName: {
=======
const mongoose = require ("mongoose");
const { Schema } = mongoose;
const validator = require('validator');

const userSchema = new Schema({
    fullName: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      middleName: {
        type: String,
        required: false,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
    },
    dateOfBirth: {
      type: Date,
      min: '1950-01-01',
      max: '2022-12-31',
      required: true,
      trim: true,
    },
    gender: {
>>>>>>> 0f6af0ac25ec84afb14cfe26e921cee7a3481983
      type: String,
      required: true,
      trim: true,
    },
<<<<<<< HEAD
    middleName: {
      type: String,
      required: false,
      trim: true,
    },
    lastName: {
=======
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      },
    },
    phoneNumber: {
>>>>>>> 0f6af0ac25ec84afb14cfe26e921cee7a3481983
      type: String,
      required: true,
      trim: true,
    },
<<<<<<< HEAD
  },
  dateOfBirth: {
    type: Date,
    min: '1950-01-01',
    max: '2022-12-31',
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    doorNo: {
=======
    address: {
      doorNo: {
        type: String,
        required: true,
        trim: true,
      },
      streetName: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      country: {
        type: String,
        required: true,
        trim: true,
      },
      zipcode: {
        type: String,
        required: true,
        trim: true,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"');
        }
      },
    },
    UID: {
>>>>>>> 0f6af0ac25ec84afb14cfe26e921cee7a3481983
      type: String,
      required: true,
      trim: true,
    },
<<<<<<< HEAD
    streetName: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    zipcode: {
      type: String,
      required: true,
      trim: true,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
  UID: {
    type: String,
    required: true,
    trim: true,
  },
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = userSchema;
=======
  }, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

 
  module.exports = userSchema;
>>>>>>> 0f6af0ac25ec84afb14cfe26e921cee7a3481983
