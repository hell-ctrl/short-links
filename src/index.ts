import express from 'express';
import cors from 'cors'

import connectDB from './configs/mongodb';
import router from './routers/shortLinkRouters';

const app = express();
connectDB();

app.use(cors())
app.use(express.json())
app.use("/shortlink", router);

app.listen(3000, () => console.log("Server started"));

