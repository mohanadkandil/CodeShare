import axios from "axios"

import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { createContext, useEffect, useState } from "react"

export const ContextStore = createContext()

const Context = (props) => {
  const token = Cookies.get("token_codeshare")
  const [isModal, setIsModal] = useState(false)
  const [userData, setUserData] = useState([])
  const [code, setCode] = useState([])

  const handleModal = () => {
    if (token) setIsModal((prev) => !prev)
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
          modalData: [isModal, setIsModal, handleModal],
          userInfo: [userData, setUserData],
          code: [code, setCode],
        }}
      >
        {props.children}
      </ContextStore.Provider>
    </>
  )
}
