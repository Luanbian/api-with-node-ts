export interface IUser {
  id?: string;
  name?: string;
  age?: number;
  role?: string;
}

export interface IHttpRequest<T = any> {
  body: T;
  params: T;
}

export interface IHttpsResponse<T = any> {
  message?: string | any[];
  statusCode: number;
  data?: T;
}

export type HttpHandler<Request = any, Response = any> = (
  request: IHttpRequest
) => Promise<IHttpsResponse>;

export interface IUserInput {
  id?: string;
  name?: string;
  age?: number;
  role?: string;
}

export interface IUserOutput {
  id?: number[] | number;
}

export interface IUserDatabase {
  InsertUser({ name, age, role }: IUser): Promise<number[] | undefined>;
  listUsers(): Promise<any[] | undefined>;
  updateUser({ id, name, age, role }: IUser): Promise<number | undefined>;
  deleteUser(id: string): Promise<number | undefined>;
}

export interface IUserController {
  newUser: HttpHandler<IUserInput, IUserOutput>;
  users: HttpHandler<IUserOutput>;
  updateUser: HttpHandler<IUserInput, IUserOutput>;
  deleteUser: HttpHandler<IUserInput, IUserOutput>;
}
