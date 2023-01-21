import { Router } from "express";
import itemRoutes from "./store.js";


const router = Router();


//this is only different bc of the router instead of app
router.get("/", (req, res) => {
  res.send(" Nope! Try adding /items to the URL");
});

router.use("/", itemRoutes );

export default router;