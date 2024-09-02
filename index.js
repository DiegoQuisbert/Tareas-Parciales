const express = require ('express');
const app = express();
const port = 4000;
app.use(express.json());

// rutas
app.get('/', (req, res)=>{
    res.send('Home');
    console.log('Cliente en el home qqeqeqeq');
});

//ruta products
app.get('/productos', (req, res)=>{
    res.send('Productos');
    console.log('Cliente en la ruta  POST: /products watehel');
});

//POST
app.post('/productos', (req, res)=>{
    const product = req.body;
    console.log('Cliente en la ruta  POST: /products watehel');
    console.log(product);
    if (product.name && product.price){
        res.status(202).json({mensaje: 'producto guardado'});
    } else {
        res.status(400).json({mensaje: 'producto inválido'})
    }
    res.json({mensaje: 'producto guardado'});
});


const findById = (req, res)=>{
    const id = req.params.id;
    res.send(`Productos con el id ${id}`);
    console.log(`Cliente en la ruta /products/${id} watehel`);
}

app.listen(port, ()=>{
    console.log(`servidor andando en el puerto ${port}`);
})