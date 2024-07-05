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
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
    const [clienteDelete, setClienteDelete] = useState(null);


    //Ejecuta funciones, renderiza la pantalla, ejecuta scripts
    useEffect(() => {
        fetchClientes();
    }, []);



    //Declarar funciones.
    const fetchClientes = () => {
        //url + listar esto es la url del servicio concatenada
        fetch('https://paginas-web-cr.com/ucr/multimedios0224/EquipoMAV/Clientes/')
            .then(respuesta => respuesta.json())
            .then((datosrepuesta) => {
                console.log(datosrepuesta);
                setClientes(datosrepuesta);
            })
            .catch(
                error => {
                    console.error('Error al cargar: ', error);
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


    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }


    const handleClienteDelete = async () => {
        try {
            const response = await axios.delete('https://paginas-web-cr.com/ucr/multimedios0224/EquipoMAV/Clientes/', {
                data: { idCliente: clienteDelete.idCliente }
            });
            console.log('Respuesta del API: ', response.data);
            toggleDeleteModal();
            fetchClientes();
        } catch (error) {
            console.error('Error en el AAPI...', error);
        }
    }

    const toggleDeleteModal = (cliente) => {
        setClienteDelete(cliente);
        setModalDeleteOpen(!modalDeleteOpen);
    };

    return (

        <div className='container'>

        <Button style={ {padding: '5px'}} color='btn btn-primary' onClick={() => toggleEditModal(null)}>Agregar</Button>



            <table
                className="table table-light table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">ID_Cliente</th>
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
                <tbody id="datos" className='table-group-divider'>
                    {
                        clientes.map(item => (
                            <tr key={item.idCliente}>
                                <td>{item.idCliente}</td>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.email}</td>
                                <td>{item.telefono}</td>
                                <td>{item.direccion}</td>
                                <td>{item.pais}</td>
                                <td>{item.estado}</td>

                                <td>
                                    <div className='btn-group'>
                                        
                                        <Button className='btn btn-success' onClick={() => toggleEditModal(item)}>Editar</Button>
                                        <Button className='btn btn-danger' onClick={() => toggleDeleteModal(item)}>Eliminar</Button>
                                    </div>


                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>


            <ClientesModal
                isOpen={modalOpen}
                toggleModal={toggleModal}
                onClientesInsert={fetchClientes}
                clienteEditar={clienteEditar}
                isEditar={isEditar}>
            </ClientesModal>


            <Modal isOpen={modalDeleteOpen} toggle={toggleDeleteModal}>

                <ModalBody>
                    <p>¿Está seguro de que desea eliminar este cliente?</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={handleClienteDelete}>Borrar</Button>
                    <Button color="secondary" onClick={toggleDeleteModal}>Cancelar</Button>
                </ModalFooter>
            </Modal>




        </div>
    );
}

export default ListaClientes;