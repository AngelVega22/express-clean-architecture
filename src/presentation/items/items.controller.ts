import { Request, Response } from "express"

export class ItemsController {
    constructor() { }


    public getItems = (req: Request, res: Response) => {
        console.log('first')
        res.json({ "Hola": 'Mundo' })
    }
}