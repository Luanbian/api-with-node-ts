import { Router } from "express";
import { UserController } from "../app/controllers/UserController";

const router: Router = Router()

//Routes
router.get("/", UserController.users);
router.post("/newUser", UserController.newUser);

export { router };