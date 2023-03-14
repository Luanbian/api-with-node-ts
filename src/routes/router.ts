import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router: Router = Router()

//Routes
router.post("/newUser", UserController.newUser);
router.get("/", UserController.users);
router.put("/updateUser/:id", UserController.updateUser);
router.delete("/deleteUser/:id", UserController.deleteUser);

export { router };