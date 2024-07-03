import React, { useState } from 'react';
import Axios from "axios";
import '../Estilos/Reserva.css';

import Swal from 'sweetalert2'


function Reservas() {
  const[id_reserva,setIdReserva] = useState(0);
  const[id_ruta,setIdRuta] = useState(0);
  const[id_clase,setIdClase] = useState(0);
  const[id_extras,setIdExtra] = useState(0);
  const[fecha,setFecha] = useState("");
  const[hora,setHora] = useState("");
  const[pasajeros,setPasajeros] = useState(0);
  const[costo_reserva,setcosto_reserva] = useState(0);
  const[editar,setEditar] = useState(false);
  const [reservasList,setReservas]=useState([]);
  const add =()=>{
    Axios.post("http://localhost:3001/create", {
      id_reserva:id_reserva,
      id_ruta:id_ruta,
      id_clase:id_clase,
      id_extras:id_extras,
      fecha:fecha,
      hora:hora,
      pasajeros:pasajeros,
      costo_reserva:costo_reserva
    }).then(()=>{
      getReservas();
      cancelar();
      Swal.fire({
        title: "<strong>Reserva Registrada!!</strong>",
        html: "<i>Reserva registrada correctamente</i>",
        icon: 'success'
      })
    }).catch(function(error){
      Swal.fire({
        title: "<strong>Oops...</strong>",
        html: "<i>No se pudo agregar el registro</i>",
        icon: 'error',
        footer: JSON.parse(JSON.stringify(error)).message
      })
    });
  }


  const update =()=>{
    Axios.put("http://localhost:3001/update", {
      id_ruta:id_ruta,
      id_clase:id_clase,
      id_extras:id_extras,
      fecha:fecha,
      hora:hora,
      pasajeros:pasajeros,
      costo_reserva:costo_reserva,
      id_reserva:id_reserva
    }).then(()=>{
      getReservas();
    cancelar();
    Swal.fire({
      title: "<strong>Reserva Actualizada!!</strong>",
      html: "<i>Reserva Actualizada correctamente</i>",
      icon: 'success'
    })
    }).catch(function(error){
      Swal.fire({
        title: "<strong>Oops...</strong>",
        html: "<i>No se pudo actualizar el registro</i>",
        icon: 'error',
        footer: JSON.parse(JSON.stringify(error)).message
      })
    });
  }

  const deleteReserva =(id_reserva)=>{
    
    Swal.fire({
      title: "<strong>Seguro que quieres eliminarlo?</strong>",
      html: "<i>Se eliminara el registro de forma permanente</i>",
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si,eliminarlo',
      cancelButtonText:'No,cancelar',
      icon: 'warning'
    }).then((res)=>{
      if(res.isConfirmed){
        Axios.delete(`http://localhost:3001/delete/${id_reserva}`).then(()=>{
          getReservas();
        cancelar(); });
        Swal.fire({
          title: "<strong>Eliminado Exitosamente!!</strong>",
          html: "<i>Reserva eliminada correctamente</i>",
          icon: 'success'
        })
      }
      else{
        Swal.fire({
          title: "<strong>No se elimino!!</strong>",
          html: "<i>La reserva no se ah eliminado</i>",
          icon: 'error'
        })
      }
    }).catch(function(error){
      Swal.fire({
        title: "<strong>Oops...</strong>",
        html: "<i>No se pudo eliminar el registro</i>",
        icon: 'error',
        footer: JSON.parse(JSON.stringify(error)).message
      })
    });
   
  }

  const cancelar =()=>{
      setEditar("");
      setIdRuta("");
      setIdClase("");
      setIdExtra("");
      setFecha("");
      setHora("");
      setPasajeros("");
      setcosto_reserva("");
      setIdReserva("");
  }

  const editarReserva= (val)=>{
  setEditar(true);
  setIdRuta(val.id_ruta);
  setIdClase(val.id_clase);
  setIdExtra(val.id_extras);
  setFecha(val.fecha);
  setHora(val.hora);
  setPasajeros(val.pasajeros);
  setcosto_reserva(val.costo_reserva);
  setIdReserva(val.id_reserva);
  }
  const getReservas=()=>{
    Axios.get("http://localhost:3001/reservas").then((response)=>{
    setReservas(response.data);
    });
  }
  return(
    <div className='container'>
    <div className="card text-center">
  <div className="card-header">
    Reserva de Vuelos
  </div>
  <div className="card-body">
  <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Reserva:</span>
  <input type="number" value={id_reserva} placeholder='No Editable'
            onChange={(event)=>{
              setIdReserva(event.target.value);
            }}
            disabled  className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Id Ruta:</span>
  <input placeholder='id' value={id_ruta}
            onChange={(event)=>{
              setIdRuta(event.target.value);
            }}
            type="number"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Id Clase:</span>
  <input placeholder='id' value={id_clase}
            onChange={(event)=>{
              setIdClase(event.target.value);
            }}
            type="number"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Id Extras:</span>
  <input placeholder='id' value={id_extras}
            onChange={(event)=>{
              setIdExtra(event.target.value);
            }}
            type="number"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>          
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Fecha:</span>
  <input placeholder='yyy-mm-dd' value={fecha}
            onChange={(event)=>{
              setFecha(event.target.value);
            }}
            type="text"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>       

       <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Hora:</span>
  <input placeholder='hh:mm:ss' value={hora}
            onChange={(event)=>{
              setHora(event.target.value);
            }}
            type="text"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>       

       <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Pasajeros:</span>
  <input placeholder='cantidad' value={pasajeros}
            onChange={(event)=>{
              setPasajeros(event.target.value);
            }}
            type="number"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>        

       <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">costo_reserva:</span>
  <input placeholder='valor' value={costo_reserva}
            onChange={(event)=>{
              setcosto_reserva(event.target.value);
            }}
            type="float|"  className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>       
          
  </div>
  <div className="card-footer text-muted">{
    editar===true?
    <div>
    <button className='btn btn-info m-2' onClick={update}>Actualizar</button>
    <button className='btn btn-warning m-2' onClick={cancelar}>Cancelar</button>
   </div>
    : <button className='btn btn-success' onClick={add}>Registrar</button>
    }
  </div>
</div>

<table className="table table-striped">
<thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">ruta</th>
      <th scope="col">clase</th>
      <th scope="col">extras</th>
      <th scope="col">fecha</th>
      <th scope="col">hora</th>
      <th scope="col">pasajeros</th>
      <th scope="col">costo_reserva</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
  <button className='btn btn-success' onClick={getReservas}>Listar</button>
         {
          reservasList.map((val,key)=>{
            return <tr key={val.id_reserva}>
                    <th scope="row">{val.id_reserva}</th>
                    <td>{val.id_ruta}</td>
                    <td>{val.id_clase}</td>
                    <td>{val.id_extras}</td>
                    <td>{val.fecha}</td>
                    <td>{val.hora}</td>
                    <td>{val.pasajeros}</td>
                    <td>{val.costo_reserva}</td>
                    <td>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" onClick={()=>{
    editarReserva(val)
  }} className="btn btn-outline-info">Editar</button>
  <button type="button" onClick={()=>{
deleteReserva(val.id_reserva)
  }} className="btn btn-outline-danger">Eliminar</button>
</div>
                    </td>
                  </tr>
           
          })
         }
   
    
  </tbody>
</table>
    </div>
)
}
export default Reservas;

