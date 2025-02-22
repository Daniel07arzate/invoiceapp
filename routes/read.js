const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

router.get('/all', async (request, response) => {
    try {
        const docs = await invoiceModel.find();
        console.log("se ha leido la informacion correctamente");
        response.status(200).json(docs);
    } catch (err) {
        console.log('ERROR: ', err);
        response.status(500).json({message: 'No se pudo leer la informacion'});
    }
});

router.get('/:invoiceNumber', async (request, response)=>{  
    try {
        const docs = await invoiceModel.findOne({
            _id: request.params.invoiceNumber
        });
        if (docs) {
            console.log('se ha encontrado la factura');
            response.status(200).json(docs);
        }else {
            console.log('factura no encontrada');
            response.status(4004).json({message: 'factura no encontrada'});
        }
    }catch (err){
        console.log('ERROR: ', err);
        response.status(500).josn({message: 'No se ha podido encotrar tu factura'});
    }
});

module.exports = router;