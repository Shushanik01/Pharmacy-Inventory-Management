import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs")

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
});