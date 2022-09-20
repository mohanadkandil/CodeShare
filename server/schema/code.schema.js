import { Entity, Schema } from "redis-om"
import client from "../redis/db"

class Code extends Entity {
  toJSON() {
    return {
      code_id: this.entityId,
      code_title: this.code_title,
      code: this.code,
      code_doc: this.code_doc,
      user_id: this.user_id,
    }
  }
}

const codeSchema = new Schema(
  Code,
  {
    code_title: { type: "text" },
    code: { type: "text" },
    code_doc: { type: "text" },
    user_id: { type: "string" },
  },
  { dataStructure: "JSON" }
)

export const codeRepository = client.fetchRepository(codeSchema)
await codeRepository.createIndex()
