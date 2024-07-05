
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navegador from './misc/nav';

import Cliente from './clientes/ListaClientes';

import Footer from './misc/footer';

function ProyectoFinal() {

  return (

    // Contenedor principal 

<div className='container-fluid'>

      <div className='container-fluid'>

        {/* HEADER */}

        <Navegador/>

      </div>

      <div className='container'>

        {/* Contenido del inicio */}
        <Cliente/>
         

      </div>

      <div className='container-fluid'>

        {/* FOOTER */}

        

      </div>

    </div >

);

}

export default ProyectoFinal;



