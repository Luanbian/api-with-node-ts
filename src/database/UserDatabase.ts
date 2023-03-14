import knex from '../config/database';
interface IUser {
  name: String;
  age: Number;
  role: String;
}

export class UserDatabase {
  static async InsertUser({ name, age, role }: IUser) {
    try {
      const result = await knex('users').insert({
        name, age, role
      })
      return result
    } catch (error: any) {
      Promise.reject(new Error(error));
    }
  }
}
