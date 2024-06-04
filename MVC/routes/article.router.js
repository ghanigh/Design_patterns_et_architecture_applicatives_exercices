import express from 'express'
import { } from '../controllers/article.controller'

const router = express.Router()

router.get("/")
router.post("/add")
router.put("/put")
router.delete("/delete")

export default router
