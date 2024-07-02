const express = require("express");
const reservas = express();
const mysql = require("mysql");
const cors = require('cors');

reservas.use(cors());
reservas.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "147258369",
  database: "skywing",
});

reservas.post("/create", (req, res) => {
  const id_reserva = req.body.id_reserva;
  const id_ruta = req.body.id_ruta;
  const id_clase = req.body.id_clase;
  const id_extras = req.body.id_extras;
  const fecha = req.body.fecha;
  const hora = req.body.hora;
  const pasajeros = req.body.pasajeros;
  const costo = req.body.costo;

  db.query('INSERT INTO reservas(id_reserva,id_ruta,id_clase,id_extras,fecha,hora,pasajeros,costo_reserva) VALUES(?,?,?,?,?,?,?,?)', [id_reserva,id_ruta,id_clase,id_extras,fecha,hora,pasajeros,costo],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Registro Exitoso");
        }
    }
  );

});

reservas.listen(3001, () => {
  console.log("Corriendo en el puerto 3001");
});
