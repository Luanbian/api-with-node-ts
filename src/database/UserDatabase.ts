import knex from '../config/database';
import { IUserDatabase, IUser } from '../interfaces/Interfaces';

export class UserDatabase implements IUserDatabase{

  async InsertUser({ name, age, role }: IUser):Promise<number[] | undefined> {
    try {
      const result = await knex('users').insert({
        name, age, role
      })
      return result
    } catch (error) {
      Promise.reject(new Error(error));
    }
  }

  async listUsers():Promise<any[] | undefined> {
    try {
      const result = await knex.select(
        'id', 'name', 'age', 'role'
      ).from('users')
      return result
    } catch (error) {
      Promise.reject(new Error(error))
    }
  }

  async updateUser({id, name, age, role}: IUser):Promise<number | undefined>{
    try {
      const result = await knex('users').update({
        name, age, role
      }).where('id',id)
      return result
    } catch(error) {
      Promise.reject(new Error(error))
    }
  }

  async deleteUser(id: string | undefined):Promise<number | undefined>{
    try {
      const result = await knex('users').delete().where('id', id)
      return result
    } catch (error) {
      Promise.reject(new Error(error))
    }
  }
}
