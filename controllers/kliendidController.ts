import { Request, Response, Router } from 'express';
import { Klient } from '../models/kliendid';

const kliendidController = Router();


kliendidController.get('/kliendid/:id/arved', async (req: Request, res: Response) => {
    try {

        const klient: Klient = {
            id: req.params.id,
            nimi: 'Kliendi nimi',
            kontaktandmed: {
                telefoninumber: '123456789',
                email: 'klient@example.com',
            },
            aadress: {
                tanav: 'Tänava tn',
                maja: 'Maja 1',
                linn: 'Linn',
                postiindeks: '12345',
            },
        };

        res.json({ klient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Serveri viga' });
    }
});



export default kliendidController;
