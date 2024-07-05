import React, { useEffect, useInsertionEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Form, FormGroup } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClientesModal = ({ isOpen, toggleModal, onClientesInsert, isEditar, clienteEditar }) => {

    const [idCliente, setIdCliente] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');


    useEffect(() => {

        if (clienteEditar) {
            setIdCliente(clienteEditar.idCliente);
            setNombre(clienteEditar.nombre);
            setApellido(clienteEditar.apellido);
            setEmail(clienteEditar.email);
            setTelefono(clienteEditar.telefono);
            setDireccion(clienteEditar.direccion);
            setPais(clienteEditar.pais);
            setEstado(clienteEditar.estado);

        } else {
            cleanData();
        }


    }, [clienteEditar]);


    const cleanData = () => {
        setIdCliente('');
        setNombre('');
        setApellido('');
        setEmail('');
        setTelefono('');
        setDireccion('');
        setPais('');
        setEstado('');
    }


    const handleSubmit = () => {
        if (isEditar) {
            handleEdit();
        } else {
            handleInsert();
        }
    }

    // Insertar
    const handleInsert = async () => {

        try {
            const response = await axios.post('https://paginas-web-cr.com/ucr/multimedios0224/EquipoMAV/Clientes/', {
                nombre,
                apellido,
                email,
                telefono,
                direccion,
                pais,
                estado
            });
            console.log('Respuesta del API: ', response.data);
            cleanData();
            toggleModal();
            onClientesInsert();
        } catch (error) {
            console.error('Error en la API...', error);
        }

    }

    // Actualizar
    const handleEdit = async () => {
        try {
            const response = await axios.put('https://paginas-web-cr.com/ucr/multimedios0224/EquipoMAV/Clientes/',
                {
                    idCliente,
                    nombre,
                    apellido,
                    email,
                    telefono,
                    direccion,
                    pais,
                    estado
                }
            );
            console.log('Respuesta', response.data);
            cleanData();
            toggleModal();
            onClientesInsert();
        } catch (error) {
            console.error('Error en el API...', error);
        }
    }

    return (

        <Modal isOpen={isOpen} toggle={toggleModal} >
            <ModalHeader toggle={toggleModal} >
                {
                    isEditar ? 'Editar ' : 'Insertar '
                }
                Cliente</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        {isEditar && (
                            <>
                                <label for='idCliente'>ID_Cliente</label>
                                <Input type='text' id='idCliente' value={idCliente} readOnly onChange={(e) => setIdCliente(e.target.value)} />
                            </>
                        )}
                        <Label>Nombre</Label>
                        <Input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></Input>
                        <Label>Apellido</Label>
                        <Input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}></Input>
                        <Label>Email</Label>
                        <Input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                        <Label>telefono</Label>
                        <Input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}></Input>
                        <Label>Direccion</Label>
                        <Input type="text" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}></Input>
                        <Label>Pais</Label>
                        <Input type="text" id="pais" value={pais} onChange={(e) => setPais(e.target.value)}></Input>
                        <Label>Estado</Label>
                        <Input type="text" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)}></Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color='success' onClick={handleSubmit}>
                    {isEditar ? 'Editar' : 'Insertar'}
                </Button>{' '}
                <Button color='danger' onClick={toggleModal}>
                    Cerrar
                </Button>
            </ModalFooter>
        </Modal>



    );
}

export default ClientesModal;