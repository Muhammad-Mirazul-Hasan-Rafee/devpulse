import cookieParser from "cookie-parser";
import cors from "cors";
import express,  {type Application, type Request, type Response } from "express";

const app: Application = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success:true,
        "message":"express server",
        "author": "next level",
    });
});

app.use(cookieParser());
app.use('/api/users', userRoute);


export default app;
