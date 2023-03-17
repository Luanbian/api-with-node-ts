export interface IUser {
  id?: string;
  name?: string;
  age?: number;
  role?: string;
}

export interface IHttpRequest<B = any, P = any> {
  body: B;
  params: P;
}

export interface IinputUpdateUser {
  input: {
    name: string,
    age: number,
    role: string
  };
  inputId: {
    id: string
  }
}

export interface IinputNewUser {
  name: string,
  age: number,
  role: string
}

export interface IHttpsResponse<T = any> {
  message?: string | any[];
  statusCode: number;
  data?: T;
}

export type HttpHandler<Request = any, Response = any> = (
  request: IHttpRequest
) => Promise<IHttpsResponse>;

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
  newUser(input: IinputNewUser):Promise<IHttpsResponse<IUserOutput>>;
  users():Promise<IHttpsResponse<IUserOutput>>;
  updateUser({input, inputId}: IinputUpdateUser):Promise<IHttpsResponse<IUserOutput>>;
  deleteUser(inputId: string):Promise<IHttpsResponse<IUserOutput>>;
}
