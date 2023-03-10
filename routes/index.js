import { Router } from "express";
import itemRoutes from "./store.js";
import usersRoutes from './users.js'

const router = Router();


router.get("/", (req, res) => {
  res.send(" Nope! Try adding /items to the URL");
});

router.use("/items", itemRoutes );
router.use('/', usersRoutes)

export default router;