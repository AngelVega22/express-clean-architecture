import { Router } from "express";
import { ItemsController } from "./items/items.controller";
import { ItemRoutes } from "./items/items.routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router()


        router.use('/api/items', ItemRoutes.routes)

        return router
    }
}