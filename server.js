import dotenv from 'dotenv';
import express from "express";
import routes from './src/routes/postsRoutes.js';

dotenv.config();



const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gatinho dormindo em uma caixa", imagem: "https://placecats.com/whiskers/300/150" },
  ];

const app = express();
routes

app.listen(3000, () => {
    console.log("Servidor escutando...");
});




