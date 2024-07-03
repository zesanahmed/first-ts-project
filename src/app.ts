import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const b;

  let a = 10;
  res.send(a);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

export default app;
