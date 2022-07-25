import express from 'express';
import cors from 'cors';

import postRoutes from './routes/routes.js';
import db from './database/db.js';

const app = express();


// ejecucion de cors nos da el manejo de errores

app.use(cors());
app.use(express.json());
app.use('/posts',postRoutes);

//para que en la consola muestre si se conecto o no la bd
try {
    await db.authenticate();
    console.log('conexión exitosa');
} catch (error) {
    console.log(`el error en conexión es: ${error}`);
}





app.listen(8000,()=>{ // el puerto debe ser el mismo que funcione con react / una cosa es el puerto de base de datos y otra con la de backend el 3000 no debemos usarlo porque lo utiliza react
    console.log('servidor funcionando en http://localhost:8000/');
}) 

