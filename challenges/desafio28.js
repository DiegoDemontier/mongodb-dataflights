db.resumoVoos.insertOne(
  {
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: db.voos.find({
      $and: [
        { "empresa.nome": "LATAM AIRLINES BRASIL" },
        { natureza: "Doméstica" },
      ],
}).count(),
},
);

db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
