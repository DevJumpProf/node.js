
import express from "express"

import {index} from "../controllers/RegisterController.js"

const router = express.Router()

router.get ("/",index)

export default router