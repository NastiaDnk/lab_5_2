import { useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { PossibleRisksSources } from '../components/PossibleRisksSources'
import { PotentialRiskEvents } from '../components/PotentialRiskEvents'
import { RiskAnalysis } from '../components/RiskAnalysis'
import { RiskPlanning } from '../components/RiskPlanning'
import { RiskMonitoring } from '../components/RiskMonitoring'

export const NavigationBar = () => {

    const navRef = useRef();
    const navigate = useNavigate();

    function redirect(to) {
        return function () {
            navigate(to);
        }
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" ref={navRef}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <a className="nav-link px-5 color-active" onClick={redirect("/possible_risks_sources")}>
                                Можливі джерела ризиків
                            </a>

                            <a className="nav-link px-5 color-active" onClick={redirect("/potential_risk_events")}>
                                Потенційні ризикові події
                            </a>

                            <a className="nav-link px-5 color-active" onClick={redirect("/risk_analysis")}>
                                Аналіз ризиків
                            </a>

                            <a className="nav-link px-5 color-active" onClick={redirect("/risk_planning")}>
                                Планування ризиків
                            </a>

                            <a className="nav-link px-5 color-active" onClick={redirect("/risk_monitoring")}>
                                Моніторинг ризиків
                            </a>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <Routes>
                    <Route path="/" element={<PossibleRisksSources />} />
                    <Route path="/possible_risks_sources" element={<PossibleRisksSources />} />
                    <Route path="/potential_risk_events" element={<PotentialRiskEvents />} />
                    <Route path="/risk_analysis" element={<RiskAnalysis />} />
                    <Route path="/risk_planning" element={<RiskPlanning />} />
                    <Route path="/risk_monitoring" element={<RiskMonitoring />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </div>
        </header>
    );
};
