import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navegador from './misc/nav';
import Cliente from './clientes/ListaClientes';

function ProyectoFinal() {
  return (
      // Contenedor principal 
    <div className='container-fluid'>
        
        <div className='container-fluid'>
          {/* Aqui va el menu */}
            <Navegador/>
        </div>

        <div className='container-fluid'>
            {/* Contenido del inicio */}
            <Cliente/>

        </div>
    </div>
   

   
  );
}

export default ProyectoFinal;

