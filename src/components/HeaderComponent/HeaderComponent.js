import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap'


class Header extends React.Component {
    render () {
        return (
            <div>
                <Navbar dark>
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cusines and create unique user experience. Our lipsmaking creations will make you feel hungry!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                </div>
        )
    }
}

export default Header;