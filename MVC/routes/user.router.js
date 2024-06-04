import express from 'express'
import { } from '../controllers/user.controller'

const router = express.Router()

router.get("/")
router.post("/add")
router.put("/put")
router.delete("/delete")

export default router