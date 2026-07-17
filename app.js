import express from 'express';
import IndexRouter from './routers/indexRouter.js';
import categoryRoute from './routers/categoryRouter.js';
import medRouter from './routers/medRouter.js';
import manufacturerRouter from './routers/manufacturerRouter.js';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(IndexRouter);
app.use(categoryRoute);
app.use(medRouter);
app.use(manufacturerRouter)

app.set("view engine", "ejs")

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
});