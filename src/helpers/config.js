import { config } from "dotenv";
config();

export default {
    PORT: process.env.PORT || 3001,
    BD_USER: process.env.BD_USER || 'root',
    BD_PASSWORD: process.env.BD_PASSWORD || '',
    BD_NAME: process.env.BD_NAME || 'crud_sencillo',
    BD_PORT: process.env.BD_PORT || 3306,
    BD_HOST: process.env.BD_HOST || 'localhost',
};