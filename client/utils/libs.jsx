import { toast } from "react-toastify"

export const join = (socketRef, room_id, username) => {
  socketRef.current.emit("join", {
    room_id,
    username,
  })
}

export const joined = (sokcetRef, username, setusers, actualCodeRef, toast) => {
  sokcetRef.current.on("joined", ({ username: name, socketId, allClients }) => {
    if (name !== username) {
      toast.success(`${name} Joined the room !`)
    }
    setusers(allClients)
    sokcetRef.current.emit("sync-code", {
      code: actualCodeRef.current,
      socketId,
    })
  })
}

export const disconnecting = (socketRef, setusers, toast) => {
  socketRef.current.on("disconnected", ({ username, socketId }) => {
    toast.info(`${username} got disconnted`)
    setusers((prev) => {
      return prev.filter((data) => {
        return data.socketId !== socketId
      })
    })
  })
}
