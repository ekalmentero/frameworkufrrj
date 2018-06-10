import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

import router from './router';
app.use(router);

app.listen(8080, function() {
    console.log("APP : INICIADO");
})
