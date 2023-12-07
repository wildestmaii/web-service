import express, { Request, Response } from "express";
const app= express();
const porta: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("Bem vindo ao meu web service");

app.listen(porta, () => {
  console.log(`Server is running on http://localhost:${porta}`);
})
});