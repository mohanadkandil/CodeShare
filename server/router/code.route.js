import express from "express"
import {
  getUserCode,
  postCode,
  deleteCode,
  searchCode,
} from "../controller/code.controller"

const router = express.Router()

router.route("/").post(postCode)

router.route("/:user_id").get(getUserCode)

router.route("/:code_id").delete(deleteCode)

router.route("/search/:term").get(searchCode)

export default router
