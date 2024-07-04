const express = require("express");
const reservas = express();
const mysql = require("mysql");
const cors = require('cors');

reservas.use(cors());
reservas.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
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
  const costo_reserva = req.body.costo_reserva;

  db.query('INSERT INTO reservas(id_reserva,id_ruta,id_clase,id_extras,fecha,hora,pasajeros,costo_reserva) VALUES(?,?,?,?,?,?,?,?)', [id_reserva,id_ruta,id_clase,id_extras,fecha,hora,pasajeros,costo_reserva],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
  );

});
//MiParte
reservas.get("/reservas", (req, res) => {

  db.query('SELECT * FROM reservas',
    (err,result)=>{
        if(err){
            console.log(err);
            alert("no guardo:",err)
        }else{
        
            res.send(result);
        }
    }
  );

});

reservas.put("/update", (req, res) => {
  const id_reserva = req.body.id_reserva;
  const id_ruta = req.body.id_ruta;
  const id_clase = req.body.id_clase;
  const id_extras = req.body.id_extras;
  const fecha = req.body.fecha;
  const hora = req.body.hora;
  const pasajeros = req.body.pasajeros;
  const costo_reserva = req.body.costo_reserva;
  db.query('UPDATE reservas SET id_ruta=?,id_clase=?,id_extras=?,fecha=?,hora=?,pasajeros=?,costo_reserva=? WHERE id_reserva=?', [id_ruta,id_clase,id_extras,fecha,hora,pasajeros,costo_reserva,id_reserva],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
  );

});

reservas.delete("/delete/:id_reserva", (req, res) => {
  const id_reserva = req.params.id_reserva;

  db.query('DELETE FROM reservas WHERE id_reserva=?', id_reserva,
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
  );

});

reservas.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM user WHERE user = ? AND password = ?';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: "Error en la consulta" });
    } else {
      if (result.length > 0) {
        res.send({ success: true });
      } else {
        res.send({ success: false, message: 'Usuario o contraseña incorrectos' });
      }
    }
  });
});

reservas.listen(3001, () => {
  console.log("Corriendo en el puerto 3001");
});
