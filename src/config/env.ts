import dotenv from 'dotenv';

dotenv.config({path: '../../.env'});    

export const ENV = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
}