const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

router.patch('/:invoiceId', async (request, response) => {
    try {
        const result = await invoiceModel.updateOne(
            { _id: request.params.invoiceId },  // Filtro para seleccionar la factura a actualizar
            {
                sellerName: request.body.sellerName,  // Campos que se van a actualizar
                sellerAddress: request.body.sellerAddress,
                customerName: request.body.customerName,
                customerAddress: request.body.customerAddress,
                items: request.body.items,
                finalPrice: request.body.finalPrice,
                terms: request.body.terms,
                invoiceDescription: request.body.invoiceDescription
            }
        );

        if (result.modifiedCount === 0) {
            return response.status(404).json({ message: 'No se encontró la factura para actualizar' });
        }

        console.log('se ha actualizado la factura');
        response.status(200).json({ message: 'Se ha actualizado la factura exitosamente' });

    } catch (err) {
        console.error('ERROR: ', err);
        response.status(500).json({ message: 'No se pudo actualizar la factura' });
    }
});

module.exports = router;
