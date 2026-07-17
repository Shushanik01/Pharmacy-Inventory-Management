import express from 'express';
import IndexRouter from './routers/indexRouter.js';
import categoryRoute from './routers/categoryRouter.js';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(IndexRouter);
app.use(categoryRoute)

app.set("view engine", "ejs")

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
});