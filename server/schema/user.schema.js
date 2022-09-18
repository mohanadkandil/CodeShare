import { Entity, Schema } from "redis-om"
import client from "../redis/db"

class User extends Entity {
  toJSON() {
    return {
      user_id: this.entityId,
      user_name: this.user_name,
      user_email: this.user_email,
      user_profile: this.user_profile,
      google_id: this.google_id,
    }
  }
}

userSchema = new Schema(
  User,
  {
    user_name: { type: "string" },
    user_email: { type: "string" },
    user_profile: { type: "string" },
    google_id: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
)

export const userRepository = client.fetchRepository(userSchema)
await userRepository.createIndex()
