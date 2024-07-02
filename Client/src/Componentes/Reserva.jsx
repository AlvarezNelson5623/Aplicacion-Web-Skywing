import React, { useState } from 'react';
import Axios from "axios";
import '../Estilos/Reserva.css';

function Reservas() {
  const[id_reserva,setIdReserva] = useState(0);
  const[id_ruta,setIdRuta] = useState(0);
  const[id_clase,setIdClase] = useState(0);
  const[id_extras,setIdExtra] = useState(0);
  const[fecha,setFecha] = useState("");
  const[hora,setHora] = useState("");
  const[pasajeros,setPasajeros] = useState(0);
  const[costo,setCosto] = useState(0);

  const add =()=>{
    Axios.post("http://localhost:3001/create", {
      id_reserva:id_reserva,
      id_ruta:id_ruta,
      id_clase:id_clase,
      id_extras:id_extras,
      fecha:fecha,
      hora:hora,
      pasajeros:pasajeros,
      costo:costo
    }).then(()=>{
      alert('Reserva Registrada')
    });
  }
  return(
    <div className="Reservas">
        <div className="datos">
            <label>Reserva: <input placeholder='No Editable'
            onChange={(event)=>{
              setIdReserva(event.target.value);
            }}
            disabled type="number"></input></label>
            <label>Id Ruta:   <input placeholder='id'
            onChange={(event)=>{
              setIdRuta(event.target.value);
            }}
            type="number"></input></label>
            <label>Id Clase:<input placeholder='id'
            onChange={(event)=>{
              setIdClase(event.target.value);
            }}
            type="number"></input></label>
            <label>Id Extras:<input placeholder='id'
            onChange={(event)=>{
              setIdExtra(event.target.value);
            }}
            type="number"></input></label>
            <label>Fecha V:<input placeholder='yyy-mm-dd'
            onChange={(event)=>{
              setFecha(event.target.value);
            }}
            type="text"></input></label>
            <label>Hora V: <input placeholder='hh:mm:ss'
            onChange={(event)=>{
              setHora(event.target.value);
            }}
            type="text"></input></label>
            <label>User V: <input placeholder='cantidad'
            onChange={(event)=>{
              setPasajeros(event.target.value);
            }}
            type="number"></input></label>
            <label>Costo:   <input placeholder='valor'
            onChange={(event)=>{
              setCosto(event.target.value);
            }}
            type="number"></input></label>
            <button onClick={add}>Registrar</button>
        </div>
        
    </div>
)
}
export default Reservas;

