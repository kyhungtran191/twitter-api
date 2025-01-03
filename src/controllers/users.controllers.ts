import { Request, Response } from 'express'
import userService from '~/services/users.services'
export const loginController = (req: Request, res: Response) => {
  res.json({ message: 'Hello from users!' })
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const result = await userService.register({ email, password })
  res.json(result)
}
