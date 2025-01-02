import { User } from '~/models/schemas/User.schema'
import dbService from './database.services'

class UserService {
  async register(payload: { email: string; password: string }) {
    const userResult = await dbService.users.insertOne(new User(payload))
    return userResult
  }
}

const userService = new UserService()
export default userService
