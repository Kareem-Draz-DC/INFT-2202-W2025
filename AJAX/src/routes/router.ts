import express from 'express'
import { sayHello } from '../controllers/hello.js'

export const router: any = express.Router()

router.get("/hello", sayHello)
