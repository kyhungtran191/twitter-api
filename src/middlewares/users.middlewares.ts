import { Request, Response, NextFunction } from 'express'

export const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.status(400).send('Username and password are required')
  }
  next()
}
