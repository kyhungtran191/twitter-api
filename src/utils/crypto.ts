import { createHash } from 'crypto'

export function sha256(content: string) {
  return createHash('sha256').update(content).digest('hex')
}
// Hash
export function hashPassword(password: string) {
  return sha256(password + process.env.PW_SECRET)
}
