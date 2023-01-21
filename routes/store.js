import { Router } from "express";
import * as controllers from "../controllers/houses.js";

const router = Router();


router.get("/", controllers.getitems);
router.get("/:id", controllers.getitem);
router.post("/", controllers.createitem);
router.put("/:id", controllers.updateitem);
router.delete("/:id", controllers.deleteitem);

export default router;