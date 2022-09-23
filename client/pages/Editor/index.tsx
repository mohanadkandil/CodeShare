import Codemirror from "codemirror"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import React, { useContext, useEffect, useRef, useState } from "react"

export const Editor = () => {
  const [users, setUsers] = useState([])
  const contextData = useContext()
  const [isModel, setIsModel, handleModel] = modelData
  const location = useLocation()
  const navigate = useNavigate()
  const { room_id, username } = location.state.details
  const socketRef = useRef(null)
  const actualCodeRef = useRef(null)

  useEffect(() => {
    if (!username) return <Navigate to="/" />
  }, [])

  return (
    <>
      <div></div>
    </>
  )
}
