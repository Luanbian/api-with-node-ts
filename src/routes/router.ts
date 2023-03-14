import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router: Router = Router()

//Routes
router.post("/users", UserController.newUser);
router.get("/users", UserController.users);
router.put("/users", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

export { router };