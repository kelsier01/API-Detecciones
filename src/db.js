import { Sequelize } from "sequelize";
import { DB_HOST, DB_DATABASE, DB_PASSWORD, DB_USER, DB_PORT} from "./config.js";
const sequelize = new Sequelize('mysql://root:jCqeLMLuobXBknRcJKZvsbHrdquwfvPl@monorail.proxy.rlwy.net:42510/railway');

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
}catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize