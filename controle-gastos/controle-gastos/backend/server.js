import express from "express";
import { supabase } from "./config/supabaseClient.js";

const app = express();

app.use(express.json());

// LISTAR DESPESAS
app.get("/", async (req, res) => {
  const { data, error } = await supabase.from("despesas").select("*");

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

// CADASTRAR DESPESA
app.post("/gastos", async (req, res) => {
  const { nome, quantidade, valor } = req.body;

  const { data, error } = await supabase
    .from("despesas")
    .insert([
      {
        nome,
        quantidade,
        valor,
      },
    ])
    .select();

  if (error) {
    return res.status(500).json(error);
  }

  res.status(201).json(data);
});

// TESTE API
app.get("/test", (req, res) => {
  res.json({
    mensagem: "API funcionando",
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});

// DELETAR DESPESA
app.delete("/gastos/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("despesas").delete().eq("id", id);

  if (error) {
    return res.status(500).json(error);
  }

  res.json({
    mensagem: "Despesa deletada com sucesso",
  });
});

// ATUALIZAR DESPESA
app.put("/gastos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, quantidade, valor } = req.body;

  const { data, error } = await supabase
    .from("despesas")
    .update({
      nome,
      quantidade,
      valor,
    })
    .eq("id", id)
    .select();

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});
