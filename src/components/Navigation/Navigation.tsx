import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavigationButton from './Buttons/NavigationButton';

function Navigation() {
    return (
        <Navbar expand="lg">
            <NavigationButton buttonText="Test" />
        </Navbar>
    )
}

export default Navigation;