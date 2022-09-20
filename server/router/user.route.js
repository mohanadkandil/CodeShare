import express from "express"
import { auth, getUser } from "../controller/user.controller"
const router = express.Router()

router.route("/").post(auth)
router.route("/:id").get(getUser)

export default router
