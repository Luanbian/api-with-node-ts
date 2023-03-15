import { Request, Response } from "express";
import { IUserDatabase } from "../interfaces/Interfaces";

export class UserController{
  private userDatabase: IUserDatabase

  constructor(userDatabase:IUserDatabase) {
    this.userDatabase = userDatabase
  }

  
  async users(req:Request, res:Response) {
    try {
      const result = await this.userDatabase.listUsers()
      res.status(200).json({result})
    } catch (error) {
      res.status(404).json({message: 'not found'})
    }
  }

  async newUser(req:Request, res:Response) {
    try {
      const {name, role} = req.body
      const age = +req.body.age
      await this.userDatabase.InsertUser({name, age, role})
      res.status(202).json({message: 'created'})
    } catch (error) {
      res.status(400).json(new Error(error))
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const {age, name, role} = req.body
      const id = req.params.id
      await this.userDatabase.updateUser(id, {name, age, role})
      res.status(200).json({message: 'ok'})
    } catch (error) {
      res.status(400).json(new Error(error))
    }
  }

  async deleteUser (req: Request, res: Response) {
    try {
      const id = +req.params.id
      await this.userDatabase.deleteUser(id)
      res.status(200).json({message: 'ok'})
    } catch (error) {
      res.status(400).json(new Error(error))
    }
  }
}