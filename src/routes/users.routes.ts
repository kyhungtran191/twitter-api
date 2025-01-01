import { Router, Request, Response, NextFunction } from 'express'
import { loginValidation } from '~/middlewares/users.middlewares'
const usersRouter = Router()

usersRouter.post('/login', loginValidation, (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello from users!')
})

export default usersRouter
