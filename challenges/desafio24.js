db.voos.find(
  { $and: [
    { litrosCombustivel: { $lt: 600 } },
    { litrosCombustivel: { $exists: true } },
    { "empresa.nome": { $ne: "GOL" } },
    { "empresa.nome": { $ne: "AZUL" } },
  ] },
  { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 },
  ).limit(1);