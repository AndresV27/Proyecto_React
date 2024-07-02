import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navegador from './misc/nav';

function ProyectoFinal() {
  return (
      // Contenedor principal 
    <div className='container-fluid'>
        
        <div className='container-fluid'>
          {/* Aqui va el menu */}
            <Navegador/>
        </div>

        <div className='container'>
            {/* Contenido del inicio */}

        </div>
    </div>
   

   
  );
}

export default ProyectoFinal;

