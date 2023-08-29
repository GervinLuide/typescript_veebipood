import { Request, Response, Router } from 'express';
import { TootedType } from '../models/tooted';

const tootedController = Router();


tootedController.get('/tooted/aegunud', async (req: Request, res: Response) => {
    try {

        const currentDate = new Date();
        const aegunudTooted: TootedType[] = [

            {
                nimetus: 'Toode 1',
                kategooria: 1,
                hind: 10,
                pildiURL: '...',
                aktiivne: true,
                laokogus: 20,
                vananemisaeg: new Date(),
            },
            {
                nimetus: 'Toode 2',
                kategooria: 2,
                hind: 15,
                pildiURL: '...',
                aktiivne: false,
                laokogus: 5,
                vananemisaeg: new Date(),
            },

        ];

        res.json({ aegunudTooted });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Serveri viga' });
    }
});



export default tootedController;

