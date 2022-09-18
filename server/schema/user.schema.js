import { Entity, Schema } from "redis-om"
import client from "../redis/db"

class User extends Entity {}

userSchema = new Schema(
  User,
  {
    username: { type: "string" },
    userEmail: { type: "string" },
    userProfile: { type: "string" },
    googleId: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
)

export const userRepository = client.fetchRepository(userSchema)
await userRepository.createIndex()
