import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  res.json({ message: 'Hello from users!' })
}