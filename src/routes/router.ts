import { Router } from "express";
import { makeUserController } from "../app/factories";

const router: Router = Router()
const userController = makeUserController()

//Routes
router.post("/users", userController.newUser);
router.get("/users", userController.users);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

export { router };