const mongoose = require ("mongoose");
const { Schema } = mongoose;
const validator = require('validator');

const docSchema = new Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        middleName: {
            type: String,
            required: true,
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
        required: true,
        trim: true,
        min: '1950-01-01',
        max: '2000-01-01',
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
      min: 9,
      max: 11,
      
    },
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
      DID: {
        type: String,
        required: true,
        trim: true,
      },
      specialization: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 10,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
              throw new Error('Password cannot contain "password"');
            }
          },
      },
      yearsOfExpirience: {
        type: Number,
        required: true,
        trim: true,
        min: 1,
        max: 50
      },
      educationalQualification: {
        type: String,
        required: true,
        trim: true
      },
      fee:{
        type:Number,
        required:true,
        trim: true
      }
    }, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});
    
    module.exports = docSchema;