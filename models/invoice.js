const mongoose = require('mongoose');

// Schema describes the information we are going to store
const invoiceSchema = new mongoose.Schema({
    sellerName: {
        type: String,
        required: true
    },
    sellerAddress: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerAddress: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    items: [{
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    finalPrice: {
        type: Number,
        required: true
    },
    terms: {
        type: String, // Changed from Number to String
        required: true
    },
    invoiceDescription: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('invoice', invoiceSchema);
