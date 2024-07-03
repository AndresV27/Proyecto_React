import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className='fixed-bottom' style={{ backgroundColor: '#f8f9fa', padding: '6px', borderTop: '1px solid #e7e7e7'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Proyecto Final: Multimedios</h6>
                            <p>&copy; 2024 Equipo MAV. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
