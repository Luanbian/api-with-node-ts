interface IUser {
  name: String;
  age: Number;
  role: String;
}

export class UserDatabase {
  static async InsertUser({ name, age, role }: IUser): Promise<void> {
    try {
      console.log(name, age, role);
    } catch (error: any) {
      Promise.reject(new Error(error));
    }
  }
}
