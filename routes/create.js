const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice');

router.post('/', async (request, response) => {
    const input = request.body;
    
    const newDocument = new invoiceModel({
        sellerName: input.sellerName,
        sellerAddress: input.sellerAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.terms,
        invoiceDescription: input.invoiceDescription
    });

    try {
        const doc = await newDocument.save();
        console.log('La información se ha guardado');
        response.status(200).json({ message: 'La información se ha guardado' });
    } catch (err) {
        console.error('ERROR: ' + err);
        response.status(500).json({ message: 'No se pudo guardar la información' });
    }
});

module.exports = router;
