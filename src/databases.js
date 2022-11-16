import{connect} from 'mongoose';
import {MONGODB_URI} from './config';

(async () => {
    try {
       const db = await connect(MONGODB_URI);
    console.log('DB connected ');
    } catch (error) {
        console.log(error)
    }
})();

// const mongoose = require ('mongoose');


// const uri = 'mongodb+srv://coffe_node:acordate21@cluster0.2kbl2bk.mongodb.net/?retryWrites=true&w=majority'


// mongoose.connect(uri , {useNewUrlParser: true, useUnifyTopology: true})