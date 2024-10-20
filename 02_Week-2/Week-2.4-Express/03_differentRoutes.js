const express = require("express");
const app = express();
var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const totalKidneys = johnKidneys.length;
  let healthyKidneys = 0;
  for (let i = 0; i < totalKidneys; i++) {
    if (johnKidneys[i].healthy) healthyKidneys++;
  }
  const unHealthyKidneys = totalKidneys - healthyKidneys;

  res.json({
    totalKidneys,
    healthyKidneys,
    unHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

function isThereAtleastOneUnHealthyKidney(){
    let atleastOneUnHealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnHealthyKidney = true;
        }
    }
    return atleastOneUnHealthyKidney;
}

app.delete("/", (req, res) => {
  if (isThereAtleastOneUnHealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }

    users[0].kidneys = newKidneys;
    res.json({
      msg: "done",
    });
  } else {
    res.status(400).json({
      msg: "No bad kidneys found",
    });
  }
});

app.listen(3000);
