import { Router } from "express";
import * as controllers from "../controllers/items.js";
import restrict from '../helpers/restrict.js'
const router = Router();


router.get("/", controllers.getItems);
router.get("/:id", controllers.getItem);
router.post("/", controllers.createItem);
router.put("/:id", controllers.updateItem);
router.delete("/:id",restrict,  controllers.deleteItem);

export default router;