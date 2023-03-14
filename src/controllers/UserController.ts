import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";

export class UserController{

  static async users(req:Request, res:Response) {
    try {
      const result = await UserDatabase.listUsers()
      res.status(200).json({result})
    } catch (error) {
      res.status(404).json({message: 'not found'})
    }
  }

  static async newUser(req:Request, res:Response) {
    try {
      const {name, role} = req.body
      const age = +req.body.age
      await UserDatabase.InsertUser({name, age, role})
      res.status(202).json({message: 'created'})
    } catch (error) {
      res.status(400).json(new Error(error))
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const {id, age, name, role} = req.body
      await UserDatabase.updateUser(id, {name, age, role})
      res.status(200).json({message: 'ok'})
    } catch (error) {
      res.status(400).json(new Error(error))
    }
  }

  static async deleteUser (req: Request, res: Response) {
    try {
      const id = +req.params.id
      await UserDatabase.deleteUser(id)
      res.status(200).json({message: 'ok'})
    } catch (error) {
      res.status(400).json(new Error(error))
    }
  }
}