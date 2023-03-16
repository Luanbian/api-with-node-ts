import { makeUserController } from "../app/factories";
import fastify, {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";
import { IHttpRequest } from "../interfaces/Interfaces";
const userController = makeUserController()

function routes(){
    const router: FastifyInstance = fastify()
    router.post("/users",(req: IHttpRequest) => userController.newUser(req));
    router.get("/users", () => userController.users());
    router.put("/users/:id", (req: IHttpRequest) => userController.updateUser(req));
    router.delete("/users/:id", (req: IHttpRequest) => userController.deleteUser(req));
    return router;
}
module.exports = routes