import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientesModal from './clientesModal';

const ListaClientes = () => {

    //declaracion de variables, arreglos
    const [clientes, setClientes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [clienteEditar, setClienteEditar] = useState(null);
    const [isEditar, setIsEditar] = useState(false);

    //Ejecuta funciones, renderiza la pantalla, ejecuta scripts
    useEffect(() => {
        fetchClientes();
    }, []);



  //Declarar funciones.
  const fetchClientes = () =>{
    //url + listar esto es la url del servicio concatenada
    fetch( 'https://paginas-web-cr.com/ucr/multimedios0224/EquipoMAV/Clientes/' )
    .then(respuesta=>respuesta.json())
    .then( (datosrepuesta) => {
        console.log(datosrepuesta);
        setClientes(datosrepuesta);
    })
    .catch(
        error=>{
            console.error('Error al cargar:' , error);
        }
       );
    };


    const toggleEditModal = (cliente) => {
        setClienteEditar(cliente);

        if (cliente) {
            setIsEditar(true);
        } else {
            setIsEditar(false);
        }

        setModalOpen(true);
    };



    const guardar = async (cliente) => {
        try {
            if (isEditar) {
                await axios.put(`https://paginas-web-cr.com/ucr/multimedios0224/EquipoMAV/Clientes/${cliente.idCliente}`, cliente);
            } else {
                await axios.post('https://paginas-web-cr.com/ucr/multimedios0224/EquipoMAV/Clientes', cliente);
            }
            fetchClientes();
            toggleModal();
        } catch (error) {
            console.error('Error al guardar:', error);
        }
    };

    const toggleModal = () => {

        setModalOpen(!modalOpen);
    }


    return (

        <div className='container'>

            <br></br><br></br><br></br>


            <Button color='primary' onClick={() => toggleEditModal(null)}>
                Agregar cliente
            </Button>

            <table
                className="table table-danger table-hover"
            >

                <thead>
                    <tr>
                       
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>

                    </tr>
                </thead>
                <tbody id="datos">
                    {
                        clientes.map(cliente => (
                            <tr key={cliente.idCliente}>
                               
                                <td>{cliente.idCliente}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.apellido}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefono}</td>
                                <td>{cliente.direccion}</td>
                                <td>{cliente.pais}</td>
                                <td>{cliente.estado}</td>
                               
                                <td>
                                    <Button color='primary' onClick={() => toggleEditModal(cliente)}>Editar</Button>

                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>

            {<Modal isOpen={modalOpen} >
                            <ModalHeader >Modal Curso</ModalHeader>
                            <ModalBody>
                                <Label>Nombre</Label>
                                <Input type="text" id="nombre" value={clienteEditar?.nombre || ''}></Input>
                                <Label>Apellido</Label>
                                <Input type="text" id="apellido" value={clienteEditar?.apellido || ''}></Input>
                                <Label>Email</Label>
                                <Input type="text" id="email" value={clienteEditar?.email || ''}></Input>
                                <Label>Telefono</Label>
                                <Input type="text" id="telefono" value={clienteEditar?.telefono || ''}></Input> 
                                <Label>Direccion</Label>
                                <Input type="text" id="direccion" value={clienteEditar?.direccion || ''}></Input> 
                                <Label>Pais</Label>
                                <Input type="text" id="pais" value={clienteEditar?.pais || ''}></Input> 
                                <Label>Estado</Label>
                                <Input type="text" id="estado" value={clienteEditar?.estado || ''}></Input>                                                                                                                                                             
                            </ModalBody>
                            <ModalFooter>
                            <Button color='success' onClick={guardar}>
                                Guardar
                            </Button>
                            <Button color='danger' onClick={() => toggleEditModal(false)}>
                                Cerrar
                            </Button>


                            </ModalFooter>
                        </Modal> }



            <ClientesModal
                isOpen={modalOpen}
                toggleModal={toggleModal}
                onClientesInsert={guardar}
                isEditar={isEditar}
                clienteEditar={clienteEditar}
            >
            </ClientesModal>

        </div>



    );
}

export default ListaClientes;