import { Router } from "express";
import { makeUserController } from "../app/factories";

const router: Router = Router()
const userController = makeUserController()

//Routes
router.post("/users", (req, res) => userController.newUser(req, res));
router.get("/users", (req, res) => userController.users(req, res));
router.put("/users/:id", (req, res) => userController.updateUser(req, res));
router.delete("/users/:id", (req, res) => userController.deleteUser(req, res));

export { router };