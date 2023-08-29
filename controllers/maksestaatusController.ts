import { Request, Response, Router } from 'express';
import { MaksestaatusType } from '../models/maksestaatus';

const maksestaatusController = Router();


maksestaatusController.get('/maksestaatus/maksmata-uletatud-maksetähtaeg', async (req: Request, res: Response) => {
    try {

        const currentDate = new Date();
        const maksmataUletatudMaksetaega: MaksestaatusType[] = [
            // Simuleeritud andmete näide
            { id: 1, seisund: 'Maksmata', tahtaeg: new Date(), makstudSumma: 0 },
            { id: 2, seisund: 'Maksmata', tahtaeg: new Date(), makstudSumma: 0 },

        ];

        res.json({ maksmataUletatudMaksetaega });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Serveri viga' });
    }
});



export default maksestaatusController;
