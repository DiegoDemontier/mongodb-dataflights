db.voos.find({ $and: [
  { ano: 2017 },
  { "empresa.nome": "GOL" },
] }, { vooId: 1,
  "empresa.nome": "GOL",
  "aeroportoOrigem.nome": 1,
  "aeroportoDestino.nome": 1,
  mes: 1,
  ano: 1,
  _id: 0 }).limit(10);