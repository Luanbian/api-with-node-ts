export interface IUserDatabase {
  InsertUser({ name, age, role }: IUser): Promise<number[] | undefined>;
  listUsers():Promise<any[] | undefined>;
  updateUser(id: string, { name, age, role }: IUser): Promise<number | undefined>;
  deleteUser(id: number): Promise<number | undefined>
}

export interface IUser {
  name: String;
  age: Number;
  role: String;
}
