import express from 'express'
import { initExpress, initMongo } from './init'
const app = express()

initMongo()
initExpress(app, __dirname)
app.listen(app.get('port'))
