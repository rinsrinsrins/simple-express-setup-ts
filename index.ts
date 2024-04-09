import express, {Express, Request, Response} from 'express';
const port = 5000;

const app: Express = express()

app.get("/",(req: Request, res: Response) => {
    res.send("Hello Backend!");
});

app.get("/test",(req: Request, res: Response) => {
    res.send("Hello Test!");
});

app.listen(port,() => {
    console.log(`Hey Clarence! im listening to port ${port}`);
});
