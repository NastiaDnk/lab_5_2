import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PossibleRisksSources } from '../components/PossibleRisksSources'
import { PotentialRiskEvents } from '../components/PotentialRiskEvents'
import { RiskAnalysis } from '../components/RiskAnalysis'
import { RiskPlanning } from '../components/RiskPlanning'
import { RiskMonitoring } from '../components/RiskMonitoring'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export const NavigationBar = () => { 
    return(
        <BrowserRouter basename="/lab_5_2">
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='px-5 color-active' as={Link} to="/possible_risks_sources">Можливі джерела ризиків</Nav.Link>
                            <Nav.Link className='px-5 color-active' as={Link} to="/potential_risk_events">Потенційні ризикові події</Nav.Link>
                            <Nav.Link className='px-5 color-active' as={Link} to="/risk_analysis">Аналіз ризиків</Nav.Link>
                            <Nav.Link className='px-5 color-active' as={Link} to="/risk_planning">Планування ризиків</Nav.Link>
                            <Nav.Link className='px-5 color-active' as={Link} to="/risk_monitoring">Моніторинг ризиків</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<PossibleRisksSources/>}/>
                <Route path="/possible_risks_sources" element={<PossibleRisksSources/>}/>
                <Route path="/potential_risk_events" element={<PotentialRiskEvents/>}/>
                <Route path="/risk_analysis" element={<RiskAnalysis/>}/>
                <Route path="/risk_planning" element={<RiskPlanning/>}/>
                <Route path="/risk_monitoring" element={<RiskMonitoring/>}/>
            </Routes>
        </BrowserRouter>
    );
}