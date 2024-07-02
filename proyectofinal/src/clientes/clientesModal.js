import React, { useEffect, useState } from 'react';

import {
    Button, Modal, ModalHeader, ModalBody, 
    ModalFooter, Form, FormGroup, Label, Input 
} from 'reactstrap';

import axios from 'axios';


const ClientesModal = ( {isOpen, toggleModal, onClientesInsert, isEditar, clientesEditar}) => {
    const [ nombre, setNombre] = useState('');
    const [ apellido, setApellido] = useState('');
    const [ email, setEmail] = useState('');
    const [ telefono, setTelefono] = useState('');
    const [ direccion, setDireccion] = useState('');
    const [ pais, setPais] = useState('');
    const [ estado, setEstado] = useState('');


    useEffect ( ()=>{

        if(clientesEditar){
            setTelefono(clientesEditar.telefono);
            setDireccion(clientesEditar.direccion);
            setNombre(clientesEditar.nombre);
            setPais(clientesEditar.pais);
            setEstado(clientesEditar.estado);
        }else{
            setTelefono('');
            setDireccion('');
            setNombre('');
            setPais('');
            setEstado('');
        }


    }, [clientesEditar]);


    const cleanData = () =>{
        setTelefono('');
        setDireccion('');
        setNombre('');
        setPais('');
        setEstado('');
    }


    const handleSubmit = async () => {   

        try {
            const response = await axios.post('https://paginas-web-cr.com/Api/apis/insertarCliente.php', 
                {
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
            onClientesInsert();
            cleanData();
            toggleModal();
        } catch (error) {
            console.error('Error en el API...', error);
        }
    }


    return ( 

        <Modal isOpen={isOpen} toggle={toggleModal} >
        <ModalHeader toogle={toggleModal} > 
            {
                isEditar ? 'Editar ' : 'Insertar '
            }            
             Cliente</ModalHeader>
        <ModalBody>
            <Label>Nombre</Label>
            <Input type="text" id="nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}></Input>
            <Label>Apellido</Label>
            <Input type="text" id="apellido" value={apellido} onChange={(e)=> setApellido(e.target.value)}></Input>
            <Label>Email</Label>
            <Input type="text" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}></Input>
            <Label>telefono</Label>
            <Input type="text" id="telefono" value={telefono} onChange={(e)=> setTelefono(e.target.value)}></Input>                                                                                                                                                                       
            <Label>Direccion</Label>
            <Input type="text" id="direccion" value={direccion} onChange={(e)=> setDireccion(e.target.value)}></Input>                                                                                                                                                                       
            <Label>Pais</Label>
            <Input type="text" id="pais" value={pais} onChange={(e)=> setPais(e.target.value)}></Input>                                                                                                                                                                       
            <Label>Estado</Label>
            <Input type="text" id="estado" value={estado} onChange={(e)=> setEstado(e.target.value)}></Input>                                                                                                                                                                       

        </ModalBody>
        <ModalFooter>
        <Button color='success' onClick={handleSubmit}>
            Guardar
        </Button>
        <Button color='danger' onClick={toggleModal}>
            Cerrar
        </Button>


        </ModalFooter>
    </Modal>
        


     );
}

export default ClientesModal;