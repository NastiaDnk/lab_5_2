import { Container, Row, Col } from 'react-bootstrap';
import {Form, Modal} from 'react-bootstrap'
import { useState } from 'react'

export const PossibleRisksSources = () => {
    const [technicalRisks, setTechnicalRisks] = useState(0);
    const [managementRisks, setManagementRisks] = useState(0);
    const [financialRisks, setFinancialRisks] = useState(0);
    const [plannedRisks, setPlannedRisks] = useState(0);
    const allAmount = 18;

    const SetCheckBoxValue = (event) => {
        if (event.target.checked) {
            if(event.target.id.includes('t'))
                setTechnicalRisks(technicalRisks + 1);
            else if(event.target.id.includes('m'))
                setManagementRisks(managementRisks + 1);
            else if(event.target.id.includes('c'))
                setFinancialRisks(financialRisks + 1);  
            else
                setPlannedRisks(plannedRisks + 1);  
        } else {
            if(event.target.id.includes('t'))
                setTechnicalRisks(technicalRisks - 1);
            else if(event.target.id.includes('m'))
                setManagementRisks(managementRisks - 1);
            else if(event.target.id.includes('c'))
                setFinancialRisks(financialRisks - 1);  
            else
                setPlannedRisks(plannedRisks - 1);  
        }
    }

    return(
        <div className='check-page'>
            <section className='checkbox-panel' id="checkbox-panel">
                <h1 className='text-danger'>Можливі джерела ризиків</h1>
                <Container>
                    <Row>
                        <Col xs={12} md={6} xl={5}>
                            <Modal.Dialog className="mt-4 mb-2 border border-3 min-height">
                                <Modal.Header className="justify-content-center fs-4 text-danger">
                                    Технічні ризики
                                </Modal.Header>
                                <Modal.Body>
                                    <Form className='labels-font'>                              
                                        <Form.Check id='t-1-1' label="Наявні нереалістичні чи неоцінені функціональні характеристики ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-1-2' label="Наявні нереалістичні чи неоцінені характеристики якості ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-1-3' label="Наявні нереалістичні чи неоцінені характеристики надійності ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-1-4' label="Наявні нереалістичні рекомендації щодо майбутньої застосовуваності ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-1-5' label="Наявні нереалістичні характеристики часової продуктивності ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-1-6' label="Наявні нереалістичні рекомендації щодо майбутньої супроводжуваності ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-1-7' label="Наявні нереалістичні пропозиції щодо повторного використання компонент ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                    </Form>
                                </Modal.Body>
                            </Modal.Dialog>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <Modal.Dialog className="mt-4 mb-2 border border-3 min-height">
                                <Modal.Header className="justify-content-center fs-4 text-danger">
                                    Ризики управління
                                </Modal.Header>
                                <Modal.Body>
                                    <Form className='labels-font'>                              
                                        <Form.Check id='m-1-1' label="Наявні хибні стратегії реалізації ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-1-2' label="Наявне неефективне планування проекту розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-1-3' label="Наявне неякісне оцінювання ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-1-4' label="Наявні прогалини в документуванні етапів реалізації ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-1-5' label="Наявні промахи в прогнозуванні результатів реалізації ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                    </Form>
                                </Modal.Body>
                            </Modal.Dialog>
                        </Col>
                        <Col xs={12} md={6} xl={2}>
                            <Modal.Dialog className="mt-4 mb-2 border border-3 min-height">
                                <Modal.Header className="justify-content-center fs-5 text-danger">
                                    Ймовірність появи джерел ризиків
                                </Modal.Header>
                                <Modal.Body className='result-font d-block text-align-left'>
                                    <p className='mb-2 mt-2'>Технічні ризики : {(technicalRisks/allAmount * 100).toFixed(4)}%</p>
                                    <p className='mb-2'>Фінансові ризики : {(financialRisks/allAmount * 100).toFixed(4)}%</p>
                                    <p className='mb-2'>Планові ризики : {(plannedRisks/allAmount * 100).toFixed(4)}%</p>
                                    <p className='mb-2'>Ризики управління : {(managementRisks/allAmount * 100).toFixed(4)}%</p>
                                    <p className='text-danger fs-5'>Загалом : {((technicalRisks + financialRisks + plannedRisks + managementRisks)/allAmount * 100).toFixed(4)}%</p>
                                </Modal.Body>
                            </Modal.Dialog>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} xl={5}>
                            <Modal.Dialog className="mt-4 mb-2 border border-3 min-height">
                                <Modal.Header className="justify-content-center fs-4 text-danger">
                                    Фінансові ризики
                                </Modal.Header>
                                <Modal.Body>
                                    <Form className='labels-font'>                              
                                        <Form.Check id='c-1-1' label="Наявні обмеження щодо сумарного бюджету на реалізацію ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='c-1-2' label="Вказана недоступна вартість реалізації ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='c-1-3' label="Присутній низький ступінь реалізму при оцінюванні витрат на ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                    </Form>
                                </Modal.Body>
                            </Modal.Dialog>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <Modal.Dialog className="mt-4 mb-2 border border-3 min-height">
                                <Modal.Header className="justify-content-center fs-4 text-danger">
                                    Планові ризики
                                </Modal.Header>
                                <Modal.Body>
                                    <Form className='labels-font'>                              
                                        <Form.Check id='p-1-1' label="Наявні нереалістичні властивості та можливості гнучкості внесення змін до планів життєвого циклу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-1-2' label="Наявні можливості порушення встановлених термінів реалізації етапів життєвого циклу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-1-3' label="Наявна низький ступінь реалізму при встановленні планів і етапів життєвого циклу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                    </Form>
                                </Modal.Body>
                            </Modal.Dialog>
                        </Col>
                    </Row>
                </Container> 
            </section>
        </div>
    )
}