import { Request, Response } from "express"

const items = [
    { id: 1, name: 'prueba' },
    { id: 2, name: 'prueba 2 ' }
]

export class ItemsController {
    constructor() { }

    public getItems = (req: Request, res: Response) => {
        return res.json(items)
    }

    public getItemById = (req: Request, res: Response) => {
        const id = +req.params.id
        if (isNaN(id)) return res.status(400).json({ error: 'ID is not a number' })

        const item = items.find(item => item.id === id);

        (item)
            ? res.json(item)
            : res.status(404).json({ error: 'not found' })
    }

    public createItem = (req: Request, res: Response) => {
        const { name } = req.body
        if (!name) return res.status(400).json({ error: 'error' })

        const newItem = { id: items.length + 1, name: name }
        items.push(newItem)
        res.json(items)
    }

    public updateItem = (req: Request, res: Response) => {
        const id = +req.params.id
        if (isNaN(id)) return res.status(400).json({ error: 'ID is not a number' })

        const item = items.find(item => item.id === id);
        if (!item) return res.status(404).json({ error: 'error, not found' })

        const { name } = req.body
        if (!name) return res.status(400).json({ error: 'error, name not found' })

        item.name = name || item.name

        return res.json(item)
    }

    public deleteItem = (req: Request, res: Response) => {
        const id = +req.params.id
        if (isNaN(id)) return res.status(400).json({ error: 'ID is not a number' })

        const item = items.find(item => item.id === id);
        if (!item) return res.status(404).json({ error: 'error, not found' })

        items.splice(items.indexOf(item), 1)

        return res.json(item)
    }
}