import { Router } from "express";
import * as controllers from "../controllers/items.js";

const router = Router();


router.get("/items", controllers.getitems);
router.get("/:id", controllers.getitem);
router.post("/", function(req,res){controllers.createitem});
router.put("/:id", function(req,res){controllers.updateitem});
router.delete("/:id",function(req,res){ controllers.deleteitem});

export default router;