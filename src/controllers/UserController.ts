import {
  IUserDatabase,
  IUserController,
  IHttpsResponse,
  IUserOutput,
  IinputNewUser,
  IinputUpdateUser,
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

  async newUser(input: IinputNewUser): Promise<IHttpsResponse<IUserOutput>> {
    const UserId = await this.userDatabase.InsertUser({
      name: input.name,
      age: input.age,
      role: input.role,
    });
    return {
      statusCode: 201,
      message: "created",
      data: { id: UserId },
    };
  }

  async updateUser({input, inputId}: IinputUpdateUser): Promise<IHttpsResponse<IUserOutput>> {
    const UserId = await this.userDatabase.updateUser({
      id: inputId.id,
      name: input.name,
      age: input.age,
      role: input.role,
    });
    return {
      statusCode: 200,
      message: "updated",
      data: { id: UserId },
    };
  }

  async deleteUser(inputId: string): Promise<IHttpsResponse<IUserOutput>> {
    const UserId = await this.userDatabase.deleteUser(inputId);
    return {
      statusCode: 200,
      message: "deleted",
      data: { id: UserId },
    };
  }
}
