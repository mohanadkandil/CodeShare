import axios from "axios"

import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { createContext, useEffect, useState } from "react"

export const ContextStore = createContext()

const Context = (props) => {
  const token = Cookies.get("token_codeshare")
  const [isModel, setIsModel] = useState(false)
  const [userData, setUserData] = useState([])
  const [code, setCode] = useState([])

  const handleModel = () => {
    if (token) setIsModel((prev) => !prev)
    else toast.info("Login to save code !")
  }

  const url = process.env.BACKEND_URL

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await axios.get(`${url}/user/${token}`)
        setUserData(user?.data)
      } catch (error) {
        toast.info("Something went wrong !")
      }
    }
    if (token) fetchUser()
  }, [token])

  return (
    <>
      <ContextStore.Provider
        value={{
          modelData: [isModel, setIsModel, handleModel],
          userInfo: [userData, setUserData],
          code: [code, setCode],
        }}
      >
        {props.children}
      </ContextStore.Provider>
    </>
  )
}

export default Context
