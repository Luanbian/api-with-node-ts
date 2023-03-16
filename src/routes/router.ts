import { makeUserController } from "../app/factories";
import fastify, { FastifyInstance, FastifyRequest } from "fastify";
import { z } from "zod";
const userController = makeUserController();

const UserSchema = z.object({
  name: z.string(),
  age: z.number().int(),
  role: z.string(),
});

const IdSchema = z.object({
  id: z.string(),
});

const router: FastifyInstance = fastify();
function routes() {
  router.post("/users", (req: FastifyRequest) => {
    const inputUser = UserSchema.parse(req.body);
    return userController.newUser(inputUser);
  });
  router.get("/users", () => userController.users());
  router.put("/users/:id", (req: FastifyRequest) => {
    const input = UserSchema.parse(req.body);
    const inputId = IdSchema.parse(req.params);
    return userController.updateUser({ input, inputId });
  });
  router.delete("/users/:id", (req: FastifyRequest) => {
    const inputId = IdSchema.parse(req.params);
    return userController.deleteUser(inputId.id);
  });
  return router;
}
module.exports = routes;
