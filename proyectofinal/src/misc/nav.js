import React from 'react';
// import LogoHotel from '../images/HotelIcon2.png';

class Nav extends React.Component {
    render() { 
        return (
                <div className='container'>
                        <nav className='navbar navbar-expand-lg fixed-top navegador'>
                        {/* <a className="navbar-brand ml-7" href="../App.js">
                            <img src={LogoHotel} width="30" height="30" class=""/>
                        </a> */}
                        <ul className='navbar-nav ml-auto'>
                            <li className="nav-item">
                                <a className="nav-link" href='../App.js'>Inicio</a>
                            </li> 
                            <li className='nav-item'>
                                <a className='nav-link' href='../clientes/index.js'>
                                    Clientes
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                
            
        );
    }
}

export default Nav;
