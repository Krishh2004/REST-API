import  express  from 'express';
import { APP_PORT, DB_URL } from './config/index.js'
const app = express();
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandlers.js';
import mongoose from "mongoose";
// mongoose.set('strictQuery',false);
mongoose.connect(DB_URL);


import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
global.AppRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false }));

app.use('/uploads',express.static('uploads'));



app.use(express.json());
app.use('/api', routes);


app.use(errorHandler);
app.listen(APP_PORT, () => {
        console.log(`listen port running ${APP_PORT}.`)
    })