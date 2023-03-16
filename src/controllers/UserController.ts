import {
  IUserDatabase,
  IUserController,
  IHttpRequest,
  IUserInput,
  IHttpsResponse,
  IUserOutput,
} from "../interfaces/Interfaces";

export class UserController implements IUserController {
  private userDatabase: IUserDatabase;

  constructor(userDatabase: IUserDatabase) {
    this.userDatabase = userDatabase;
  }

  async users(): Promise<IHttpsResponse<IUserOutput>> {
    const Users = await this.userDatabase.listUsers();
    return {
      statusCode: 200,
      message: Users,
    };
  }

  async newUser(req: IHttpRequest<IUserInput>): Promise<IHttpsResponse<IUserOutput>> {
    const UserId = await this.userDatabase.InsertUser({
      name: req.body.name,
      age: req.body.age,
      role: req.body.role,
    });
    return {
      statusCode: 201,
      message: "created",
      data: { id: UserId },
    };
  }

  async updateUser(req: IHttpRequest<IUserInput>): Promise<IHttpsResponse<IUserOutput>> {
    const UserId = await this.userDatabase.updateUser({
      id: req.params.id,
      name: req.body.name,
      age: req.body.age,
      role: req.body.role,
    });
    return {
      statusCode: 200,
      message: "updated",
      data: { id: UserId },
    };
  }

  async deleteUser(req: IHttpRequest<IUserInput>): Promise<IHttpsResponse<IUserOutput>> {
    const id = req.params.id || "";
    const UserId = await this.userDatabase.deleteUser(id);
    return {
      statusCode: 200,
      message: "deleted",
      data: { id: UserId },
    };
  }
}
