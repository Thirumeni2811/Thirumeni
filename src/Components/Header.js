import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Header.css'
const Header = (args) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <Navbar expand="md" className='expand-true container-true p-1 fw-bold padding '  {...args} >
            <NavbarBrand href="/" className='nameSet' >
                <h1>Thirumeni</h1>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto d-flex align-items-start gap-1 containItems" navbar >
                    <NavItem>
                        <NavLink href="#Education">Education</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Internship">Internships</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Projects">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Contact">
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Skills">
                            Skills
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </>
    )
}

export default Header;