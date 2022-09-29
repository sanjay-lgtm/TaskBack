import express from 'express';
const app = express();

import bodyParser from 'body-parser';
import cors from 'cors'

import { dataRouter } from './Routes/data';

import { mongoconnection } from './db';
import { LogRouter } from './Routes/Login';
mongoconnection();


app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/upload", express.static("uploads"));
app.use("/api", dataRouter);
app.use("/Log",LogRouter)
export default app;