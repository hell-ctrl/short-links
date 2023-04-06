import express from 'express';

import connectDB from './configs/mongodb';
import router from './routers/shortLinkRouters';

const app = express();
connectDB();

app.use(express.json())
app.use("/short", router);

app.listen(3000, () => console.log("Server started"));

