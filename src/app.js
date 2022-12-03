import express from "express"
import cors from "cors";
import morgan from "morgan"
import config from "./helpers/config";
import * as routes from './helpers/importRoutes'

const app = express()

const corsOptions = { origin: '*' };

// Middlewares
app.use(cors(corsOptions));
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/tareas/', routes.taskRoutes)

app.set('port', config.PORT)

export default app