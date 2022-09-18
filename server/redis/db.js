import { Client } from "redis-om"

const url = process.env.Redis_URL

const client = new Client()

try {
  const res = client.open(url)
  console.log("CONNECTED to REDIS DB")
} catch (error) {
  console.log("failed connecting redis", error)
}

export default client
