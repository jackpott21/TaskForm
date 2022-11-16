import {config} from 'dotenv';

config();


export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://coffe_node:acordate21@cluster0.2kbl2bk.mongodb.net/?retryWrites=true&w=majority'

export const PORT = process.env.PORT || 3000;