import express from "express"
import { getLyrica } from "../controller/lyrica.controller.js"

const router=express.Router()

router.get("/",getLyrica)

export default router
