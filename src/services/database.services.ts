import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.DB_USERNAME)

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twitter.0gy2f.mongodb.net/twitter?retryWrites=true&w=majority&appName=twitter`

class DatabaseService {
  private client: MongoClient
  constructor() {
    this.client = new MongoClient(uri)
  }
  async connect() {
    try {
      await this.client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
      await this.client.close()
    }
  }
}

// Create obj from db service
const dbService = new DatabaseService()
export default dbService
