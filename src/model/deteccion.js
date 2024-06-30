import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Deteccion = sequelize.define(
    'Deteccion',
    {
       ubicacion: {
        type: DataTypes.STRING,
       },
       imagen:{
        type: DataTypes.STRING,
       },
       estado:{
        type: DataTypes.INTEGER,
       },
    }
);

export default Deteccion