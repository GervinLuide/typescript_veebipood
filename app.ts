// app.ts

import express from 'express';
import tootedController from './controllers/tootedController';
import kategooriadController from './controllers/kategooriadController';
import kliendidController from './controllers/kliendidController';
import maksestaatusController from './controllers/maksestaatusController';
import arvedController from './controllers/arvedController';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(tootedController);
app.use(kategooriadController);
app.use(kliendidController);
app.use(maksestaatusController);
app.use(arvedController);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
