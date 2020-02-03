import express from 'express';
import {json} from 'express';

const app = express();

app.use(json()); //bodyParser

app.listen(3000, () => { console.log('Running!') });

export {
    app
}