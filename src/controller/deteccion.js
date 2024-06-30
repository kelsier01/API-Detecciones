import Deteccion from "../model/deteccion.js"

export const getDeteccion = async (req,res) =>  {
    const deteccion = await Deteccion.findAll();
    res.json(deteccion)
}
export const postDeteccion = async (req,res) => {
    const deteccion = await Deteccion.create(req.body)
    res.json(deteccion)
}