import { Router } from "express"
import { ItemsController } from "./items.controller"

export class ItemRoutes {
    static get routes(): Router {
        const router = Router()
        const itemController = new ItemsController()

        router.get('/', itemController.getItems)

        return router
    }
}