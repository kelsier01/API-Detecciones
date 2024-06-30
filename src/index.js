import express from 'express'
import deteccionesRoutes from './routes/detecciones.js'
import {PORT} from './config.js'

const app = express();
app.use(deteccionesRoutes);
app.listen(PORT)
console.log("Server running on port", PORT)
