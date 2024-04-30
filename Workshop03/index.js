const express = require('express');
const api = express();
api.use(express.json());

const PORT = process.env.PORT || 3000;


api.get('/hello', (req, res) => {

    try{
            let message = 'Amigos';

        if (req.query.message) {
            message = req.query.message;
        }

        res.json({ response: `Bienvenidos ${message}` });
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
});


api.post('/user', (req, res) => {

    try{
        const { name, lastname } = req.body;
        res.json({ response: `El usuario ${name} ${lastname} fue creado` });
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

});


api.listen(PORT,  () => {
    console.log(`Base de datos esta corriendo en ${PORT}`);
});