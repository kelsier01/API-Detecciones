import { Router } from "express";
import { getDeteccion, postDeteccion} from "../controller/deteccion.js";

const router = Router()

router.get('/detecciones', getDeteccion)
router.post('/detecciones',postDeteccion)

export default router