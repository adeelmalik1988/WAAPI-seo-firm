import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav,
    Form,
    FormControl,
    Button

} from 'react-bootstrap';


function NavbarTop() {
    return (
        <>

            <Navbar bg="primary" variant="dark" fixed="top"  >
                <Navbar.Brand href="#home">ISLAMABAD SEO SERVICES</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>

        </>

    )
}

export default NavbarTop;