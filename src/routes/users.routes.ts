import { Router, Request, Response, NextFunction } from 'express'
import { loginValidation } from '~/middlewares/users.middlewares'
import { registerController } from '~/controllers/users.controllers'
const usersRouter = Router()

usersRouter.post('/login', loginValidation, (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello from users!')
})

usersRouter.post('/register', registerController)

export default usersRouter
