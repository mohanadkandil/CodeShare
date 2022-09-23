import { io } from "socket.io-client"

export const initSocketClient = async () => {
  let url = process.env.SOCKET_URL
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  }
  return io(url, options)
}
