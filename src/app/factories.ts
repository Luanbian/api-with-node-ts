import { UserController } from "../controllers/UserController";
import { UserDatabase } from "../database/UserDatabase";

export const makeUserDatabase = () => {
    return new UserDatabase()
}
export const makeUserController = () => {
    const userDatabase = makeUserDatabase()
    return new UserController(userDatabase)
}
