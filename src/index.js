import app from './app';
import './databases';
import {PORT} from './config'

const mongoose = require("mongoose");

app.listen(PORT)
console.log('Local server on port' , PORT);