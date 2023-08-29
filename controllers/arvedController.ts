import { Request, Response, Router } from 'express';
import { Arved } from '../models/arved';

const arvedController = Router();

arvedController.get('/arved/:id/maksmata', async (req: Request, res: Response) => {
    try {

        const kliendiMaksmataArved: Arved[] = [
            { id: 1, klient: 1, makstud: false },
            { id: 2, klient: 1, makstud: false },
        ];

        res.json({ kliendiMaksmataArved });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Serveri viga' });
    }
});


export default arvedController;


