import React, { useEffect, useState } from 'react';
import {
        Button, Modal, ModalHeader, ModalBody, 
        ModalFooter, Form, FormGroup, Label, Input 
    } from 'reactstrap';

import ClientesModal from './clientesModal';


    const ListaClientes = () => {

        //declaracion de variables, arreglos
        const [clientes, setClientes] = useState([]);
        const [modalOpen, setModalOpen] = useState(false);
        const [clientesEditar, setClientesEditar] = useState(null);
        const [isEditar, setIsEditar] = useState(false);
    
        //Ejecuta funciones, renderiza la pantalla, ejecuta scripts
        useEffect(() =>{
            fetchClientes();
        }, []);
    
        
    
        //Declarar funciones.
        const fetchClientes = () => {
            fetch('https://paginas-web-cr.com/ucr/multimedios0224/ApiMAV/Clientes')
                .then(respuesta => respuesta.json())
                .then((datosrepuesta) => {
                  
                    setClientes(datosrepuesta.data);

                      
                        
                    
                })
                .catch(error => {
                    console.error('Error al cargar:', error);
                  
                });
        };
    
    
        const toggleEditModal = (cliente) =>{
            setClientesEditar(cliente);
    
            if(cliente){
                setIsEditar(true);
            }else{
                setIsEditar(false);
            }
    
            setModalOpen(true);
        };
    
    
    
        const guardar = async ()=>{
            // similar al fect
        }
    
        //Permite abri modal desde otro componente.
        const toggleModal =() =>{
    
            setModalOpen(!modalOpen);
        }
    
        
        return ( 
    
            <div className='container'>
    
            <br></br><br></br><br></br>
    
                <div className='container'>
                    <Button color='btn btn-warning' onClick={() => toggleEditModal(null)}>
                        Insertar cliente
                    </Button>
                </div>

                
                <div className='container-fluid'>
                    <table className="table table-danger table-hover align-middle">
                                    
                                    <thead>
                                        <tr >
                                            <th scope="col">Acciones</th>
                                            <th scope="col">ID_Cliente</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Apellido</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Teléfono</th>
                                            <th scope="col">Dirección</th>
                                            <th scope="col">País</th>
                                            <th scope="col">Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody id="datos" className="table-group-divider">
                                        {
                                            clientes.map( cliente => (
                                                    <tr key={cliente.idCliente}>
                                                        <td>Botones</td>
                                                        <td>{cliente.idCliente}</td>
                                                        <td>{cliente.nombre }</td>
                                                        <td>{cliente.apellido}</td>
                                                        <td>{cliente.email}</td>
                                                        <td>{cliente.telefono}</td>
                                                        <td>{cliente.direccion}</td>
                                                        <td>{cliente.pais}</td>
                                                        <td>{cliente.estado}</td>
                                                        <td>
                                                            <Button color='primary' onClick={()=>toggleEditModal(cliente)}>Editar</Button>
                                                        </td>
                                                    </tr>
                                            ))
                                        }
    
    
                                    </tbody>
                    </table>
                </div>
                    
    
                            {/* <Modal isOpen={modalOpen} >
                                <ModalHeader >Modal Curso</ModalHeader>
                                <ModalBody>
                                    <Label>Nombre</Label>
                                    <Input type="text" id="nombre" value={cursoEditar?.nombre || ''}></Input>
                                    <Label>Descripcion</Label>
                                    <Input type="text" id="descripcion" value={cursoEditar?.descripcion || ''}></Input>
                                    <Label>Tiempo</Label>
                                    <Input type="text" id="tiempo" value={cursoEditar?.tiempo || ''}></Input>
                                    <Label>Usuario</Label>
                                    <Input type="text" id="usuario" value={cursoEditar?.usuario || ''}></Input>                                                                                                                                                             
                                </ModalBody>
                                <ModalFooter>
                                <Button color='success' onClick={guardar}>
                                    Guardar
                                </Button>
                                <Button color='danger' onClick={() => toggleEditModal(false)}>
                                    Cerrar
                                </Button>
    
    
                                </ModalFooter>
                            </Modal> */}
    
    
    
            {/* Este modal es para editar */}
            <clientesModal 
                isOpen={modalOpen} 
                toggleModal={toggleModal} 
                onClientesInsert={fetchClientes}
                isEditar={isEditar}
                clientesEditar={clientesEditar}
                >
            </clientesModal>
    
            </div>
    
    
    
          );
    }
    
    export default ListaClientes;