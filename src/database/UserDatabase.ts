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
    } catch (error) {
      Promise.reject(new Error(error));
    }
  }

  static async listUsers() {
    try {
      const result = await knex.select(
        'id', 'name', 'age', 'role'
      ).from('users')
      return result
    } catch (error) {
      Promise.reject(new Error(error))
    }
  }

  static async updateUser(id: number, {name, age, role}: IUser) {
    try {
      const result = await knex('users').update({
        name, age, role
      }).where('id',id)
      return result
    } catch(error) {
      Promise.reject(new Error(error))
    }
  }

  static async deleteUser(id: number) {
    try {
      const result = await knex('users').delete().where('id', id)
      return result
    } catch (error) {
      Promise.reject(new Error(error))
    }
  }
}
