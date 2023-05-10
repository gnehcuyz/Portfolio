import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';


export const NavBar= () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="#home">
            <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" 
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" 
            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" 
            className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <span className="navbar-text">
                <div className="social-icons">
                    <a href="#"> <img src={linkedin} alt="LinkedIn" /> </a>
                    <a href="#"> <img src={github} alt="Github" /> </a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let&apos;s connect!</span>
                </button>
            </span>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
