import { Container, Row, Col } from 'react-bootstrap';
import { Form, Modal } from 'react-bootstrap'
import { useState } from 'react';

export const PotentialRiskEvents = () => {
    const [technicalRisks, setTechnicalRisks] = useState(0);
    const [managementRisks, setManagementRisks] = useState(0);
    const [financialRisks, setFinancialRisks] = useState(0);
    const [plannedRisks, setPlannedRisks] = useState(0);
    const allAmount = 46;

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
            <h1 className='text-danger'>Потенційні ризикові події</h1>
                <Container>
                    <Row>
                        <Col xs={12} md={6} xl={5}>
                            <Modal.Dialog className="mt-4 mb-2 border border-3 min-height">
                                <Modal.Header className="justify-content-center fs-4 text-danger">
                                    Технічні ризики
                                </Modal.Header>
                                <Modal.Body>
                                    <Form className='labels-font'>                              
                                        <Form.Check id='t-2-1' label="Затримки у постачанні обладнання, необхідного для підтримки процесу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-2' label="Затримки у постачанні інструментальних засобів, необхідних для підтримки процесу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-3' label="Небажання команди виконавців ПЗ використовувати інструментальні засоби для підтримки процесу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-4' label="Відмова команди виконавців від CASE-засобів розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-5' label="Формування запитів на більш потужні інструментальні засоби розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-6' label="Недостатня продуктивність баз(и) даних для підтримки процесу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-7' label="Програмні компоненти, які використовують повторно в ПЗ, мають дефекти та обмежені функціональні можливості" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-8' label="Неефективність програмного коду, згенерованого CASE-засобами розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-9' label="Неможливість інтеграції CASE-засобів з іншими інструментальними засобами для підтримки процесу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-10' label="Швидкість виявлення дефектів у програмному коді є нижчою від раніше запланованих термінів" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='t-2-11' label="Поява дефектних системних комопнент, які використовують для розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
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
                                        <Form.Check id='m-2-1' label="Низький моральний стан персоналу команди виконавців ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-2' label="Низька взаємодія між членами команди виконавців ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-3' label="Пасивність керівника(менеджера) програмного проекту" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-4' label="Недостатня компетентність керівника(менеджера) програмного проекту" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-5' label="Незадоволеність замовника результатами етапів реалізації програмного проекту" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-6' label="Недостатня кількість фахівців у команді виконавців ПЗ з необхідним професійним рівнем" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-7' label="Хвороба провідного виконавця в найкритичніший момент розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-8' label="Одночасна хвороба декількох виконавців під час розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-9' label="Неможливість організації необхідного навчання персоналу команди виконавців ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-10' label="Зміна пріоритетів у процесі управління програмним проектом" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-11' label="Недооцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>     
                                        <Form.Check id='m-2-12' label="Переоцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-13' label="Надмірне документування результатів на етапах реалізації програмного проекту" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-14' label="Недостатнє документування результатів на етапах реалізації програмного проекту" onChange={(e) => SetCheckBoxValue(e)}/> 
                                        <Form.Check id='m-2-15' label="Нереалістичне прогнозування результатів на етапах реалізації програмного проекту" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='m-2-16' label="Недостатній професійний рівень представників від компанії-замовника ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>                   
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
                                        <Form.Check id='c-2-1' label="Недооцінювання витрат на реалізацію програмного продукту (надмірно низька вартість)" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='c-2-2' label="Переоцінювання витрат на реалізацію програмного продукту (надмірно висока вартість)" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='c-2-3' label="Фінансові ускладнення у компанії-замовника ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='c-2-4' label="Фінансові ускладнення у компанії-розробника ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='c-2-5' label="Збільшення бюджету програмного проекту з ініціативи компанії-розробника ПЗ під час його реалізації" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='c-2-6' label="Висока вартість виконання повторних робіт, необхідних для зміни вимог до ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='c-2-7' label="Реорганізація структурних підрозділів у компанії-замовника ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='c-2-8' label="Реорганізація команди виконавців у компанії-розробника ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
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
                                        <Form.Check id='p-2-1' label="Зміни графіку виконання робіт з боку замовника чи виконавця" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-2' label="Порушення графіку виконання робіт у компанії-розробника ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-3' label="Потреба зміни користувацьких вимог до ПЗ з боку компанії-замовника ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-4' label="Потреба зміни функціональних вимог до ПЗ з боку компанії-розробника ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-5' label="Потреба виконання великої кількості повторних робіт, необхідних для зміни вимог до ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-6' label="Недооцінювання тривалості етапів реалізації програмного проекту з боку компанії-замовника ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-7' label="Переоцінювання тривалості етапів реалізації програмного проекту" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-8' label="Остаточний розмір ПЗ перевищує заплановані його характеристики" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-9' label="Остаточний розмір ПЗ значно менший за заплановані його характеристики" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-10' label="Поява на ринку аналогічного ПЗ до виходу замовленого" onChange={(e) => SetCheckBoxValue(e)}/>
                                        <Form.Check id='p-2-11' label="Поява на ринку більше конкурентоздатного ПЗ" onChange={(e) => SetCheckBoxValue(e)}/>
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