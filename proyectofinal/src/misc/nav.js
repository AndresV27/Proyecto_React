import React from 'react';
import '../App.css'; // Ajusta la ruta según la estructura de tu proyecto
import LogoHotel from '../images/HotelIcon2.png';

class Nav extends React.Component {
    render() { 
        return (
                <div className='container'>
                        <nav className='navbar navbar-expand-lg fixed-top navegador'>
                        {/* <a className="navbar-brand ml-7" href="../App.js">
                            <img src={LogoHotel} width="30" height="30" class=""/>
                        </a> */}
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <button className='nav-link btn btn-link'>
                                    Inicio
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button className='nav-link btn btn-link'>
                                    Clientes
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            
        );
    }
}

export default Nav;
