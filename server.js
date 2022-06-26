
//index.js
  
import express from 'express';
// import bodyParser from 'body-parser';
import { APP_PORT } from './config';
import errorHandler from './middlewares/errorHandler';
import routes from './routes'


  
const app = express();

app.use('/api',routes);
app.use(express.json())

// app.use(bodyParser.urlencoded({extended : true}))

app.use(errorHandler)  
app.listen(APP_PORT,() => {
    console.log(`Running on PORT ${APP_PORT}`);
})