import { Request, Response, Router } from 'express';
import { Kategooriad } from '../models/kategooriad';

const kategooriadController = Router();


kategooriadController.get('/kategooriad', async (req: Request, res: Response) => {
    try {

        const kategooriad: Kategooriad[] = [
            { nimetus: 'Kategooria 1' },
            { nimetus: 'Kategooria 2' },

        ];

        res.json({ kategooriad });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Serveri viga' });
    }
});



export default kategooriadController;
