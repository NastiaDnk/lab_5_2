import { Modal, Table } from 'react-bootstrap';

export const RiskMonitoring = () => {
    var list = new Array(46);
    var ERPER = new Array(46);
    var ELRER = new Array(46);
    var EVRER = new Array(46);
    var Priority = new Array(46);
    var min;
    var max;
    var mpr;
    var risks = [];

    for(var i = 0; i < list.length; ++i)
    {
        list[i] = new Array(10);
        for(var j = 0; j < list[i].length; ++j)
            list[i][j] = <td><input id={`list-${i}-${j}`} onKeyUp={(event) => { if(event.key === "Enter") recalculateValues()}} defaultValue={Math.round(Math.random() * 1000) / 1000} style={{width: "70px", textAlign: 'center'}}/></td>;
    }

    for(var i = 0; i < ERPER.length; ++i) 
        ERPER[i] = <td id={`ERPER-${i}`}>{Math.round(0.1 * list[i].reduce((partialSum, a) => partialSum + a.props.children.props.defaultValue, 0) * 1000) / 1000}</td>;

    for(var i = 0; i < ELRER.length; ++i)
        ELRER[i] = <td id={`ELRER-${i}`}>{Math.round(Math.random() * 1000) / 1000}</td>;

    for(var i = 0; i < EVRER.length; ++i)
        EVRER[i] = <td id={`EVRER-${i}`}>{Math.round(Math.random() * 1000 * ELRER[i].props.children) / 1000}</td>;
    
    min = Math.min(...EVRER.map(function(evrer) {
        return evrer.props.children;
    }));

    max = Math.max(...EVRER.map(function(evrer) {
        return evrer.props.children;
    }));

    mpr = (max - min) / 3;
    for(var i = 0; i < Priority.length; ++i)
    {
        var res = 'низький';
        if(EVRER[i].props.children >= min && EVRER[i].props.children < min + mpr)
            res = 'низький';
        if(EVRER[i].props.children >= min + mpr && EVRER[i].props.children < min + 2 * mpr)
            res = 'середній';
        if(EVRER[i].props.children >= min + 2 * mpr & EVRER[i].props.children <= max)
            res = 'високий';
        Priority[i] = <td id={`priority-${i}`}>{res}</td>;
    }

    var erperSUM = ERPER.reduce((partialSum, a) => partialSum + a.props.children, 0);
    var erperi = new Array(4).fill(0);
    risks = new Array(4).fill(0);
    for(var i = 0; i < erperi.length; ++i) 
    {
        var from = 0;
        var to = 0;

        if(i === 0) {
            from = 0;
            to = 11;
        }
        if(i === 1) {
            from = 11;
            to = 19;
        }   
        if(i === 2) {
            from = 19;
            to = 30;
        }   
        if(i === 3) {
            from = 30;
            to = 46;
        }   
        for(var j = from; j < to; ++j)
            erperi[i] += ERPER[j].props.children;
        risks[i] = Math.round(1 / erperSUM * erperi[i] * 1000 * 100) / 1000;
    }
    

    const recalculateValues = () => {
        for(var i = 0; i < ERPER.length; ++i) {
            let sum = 0;
            for(var j = 0; j < 10; ++j) {
                sum += Number(document.getElementById(`list-${i}-${j}`).value);
            }
            document.getElementById(`ERPER-${i}`).innerHTML = Math.round(0.1 * sum * 1000) / 1000;
        }
 
        for(var i = 0; i < EVRER.length; ++i) {
            document.getElementById(`EVRER-${i}`).innerHTML = Math.round(Math.random() * 1000 * document.getElementById(`ELRER-${i}`).innerHTML) / 1000;
        }

        min = Math.min(...Array.from({length : EVRER.length}).map((_, i) => {
            return Number(document.getElementById(`EVRER-${i}`).innerHTML);
        }));

        max = Math.max(...Array.from({length : EVRER.length}).map((_, i) => {
            return Number(document.getElementById(`EVRER-${i}`).innerHTML);
        }));

        mpr = (max - min) / 3;

        document.getElementById('min-interval').innerHTML = `min : ${min}`;
        document.getElementById('max-interval').innerHTML = `max : ${max}`;

        document.getElementById('low-interval').innerHTML = `Низький : [${min}; ${(min + mpr).toFixed(3)})`;
        document.getElementById('middle-interval').innerHTML = `Середній : [${(min + mpr).toFixed(3)}; ${(min + 2 * mpr).toFixed(3)})`;
        document.getElementById('high-interval').innerHTML = `Високий : [${(min + 2 * mpr).toFixed(3)}; ${max})`;

        for(var i = 0; i < Priority.length; ++i)
        {
            let res = 'низький';
            if(Number(document.getElementById(`EVRER-${i}`).innerHTML) >= min && Number(document.getElementById(`EVRER-${i}`).innerHTML) < min + mpr)
                res = 'низький';
            if(Number(document.getElementById(`EVRER-${i}`).innerHTML) >= min + mpr && Number(document.getElementById(`EVRER-${i}`).innerHTML) < min + 2 * mpr)
                res = 'середній';
            if(Number(document.getElementById(`EVRER-${i}`).innerHTML) >= min + 2 * mpr & Number(document.getElementById(`EVRER-${i}`).innerHTML) <= max)
                res = 'високий';
            document.getElementById(`priority-${i}`).innerHTML = res;
        }
    
        erperSUM = 0;
        for(var i = 0; i < ERPER.length; ++i)
            erperSUM += Number(document.getElementById(`ERPER-${i}`).innerHTML);
            erperi = new Array(4).fill(0);
        risks = new Array(4).fill(0);

        for(var i = 0; i < erperi.length; ++i) 
        {
            var from = 0;
            var to = 0;
    
            if(i === 0) {
                from = 0;
                to = 11;
            }
            if(i === 1) {
                from = 11;
                to = 19;
            }   
            if(i === 2) {
                from = 19;
                to = 30;
            }   
            if(i === 3) {
                from = 30;
                to = 46;
            }   
            for(var j = from; j < to; ++j)
                erperi[i] += Number(document.getElementById(`ERPER-${j}`).innerHTML);
            risks[i] = Math.round(1 / erperSUM * erperi[i] * 1000 * 100) / 1000;
        }

        document.getElementById('tech-risk').innerHTML = `Технічні ризики : ${risks[0]}%`;
        document.getElementById('financial-risk').innerHTML = `Фінансові ризики : ${risks[1]}%`;
        document.getElementById('plan-risk').innerHTML = `Планові ризики : ${risks[2]}%`;
        document.getElementById('management-risk').innerHTML = `Ризики управління : ${risks[3]}%`;
        document.getElementById('general-risk').innerHTML = `Загалом : ${
            risks[0] + risks[1] + risks[2] + risks[3] > 100 ?
            '100.000' : (risks[0] + risks[1] + risks[2] + risks[3]).toFixed(3)}%`;
    }

    return(
        <div>
            <h1 className='text-danger'>Моніторинг ризиків</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ризикові події</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>ERPER</th>
                            <th>ELRER</th>
                            <th>EVRER</th>
                            <th>Пріоритет</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ['t1.Затримки у постачанні обладнання, необхідного для підтримки процесу розроблення ПЗ',
                            't2.Затримки у постачанні інструментальних засобів, необхідних для підтримки процесу розроблення ПЗ',
                            't3.Небажання команди виконавців ПЗ використовувати інструментальні засоби для підтримки процесу розроблення ПЗ',
                            't4.Відмова команди виконавців від CASE-засобів розроблення ПЗ',
                            't5.Формування запитів на більш потужні інструментальні засоби розроблення ПЗ',
                            't6.Недостатня продуктивність баз(и) даних для підтримки процесу розроблення ПЗ',
                            't7.Програмні компоненти, які використовують повторно в ПЗ, мають дефекти та обмежені функціональні можливості',
                            't8.Неефективність програмного коду, згенерованого CASE-засобами розроблення ПЗ',
                            't9.Неможливість інтеграції CASE-засобів з іншими інструментальними засобами для підтримки процесу розроблення ПЗ',
                            't10.Швидкість виявлення дефектів у програмному коді є нижчою від раніше запланованих термінів',
                            't11.Поява дефектних системних комопнент, які використовують для розроблення ПЗ',
                            'c1.Недооцінювання витрат на реалізацію програмного продукту (надмірно низька вартість)',
                            'c2.Переоцінювання витрат на реалізацію програмного продукту (надмірно висока вартість)',
                            'c3.Фінансові ускладнення у компанії-замовника ПЗ',
                            'c4.Фінансові ускладнення у компанії-розробника ПЗ',
                            'c5.Збільшення бюджету програмного проекту з ініціативи компанії-розробника ПЗ під час його реалізації',
                            'c6.Висока вартість виконання повторних робіт, необхідних для зміни вимог до ПЗ',
                            'c7.Реорганізація структурних підрозділів у компанії-замовника ПЗ',
                            'c8.Реорганізація команди виконавців у компанії-розробника ПЗ',
                            'p1.Зміни графіку виконання робіт з боку замовника чи виконавця',
                            'p2.Порушення графіку виконання робіт у компанії-розробника ПЗ',
                            'p3.Потреба зміни користувацьких вимог до ПЗ з боку компанії-замовника ПЗ',
                            'p4.Потреба зміни функціональних вимог до ПЗ з боку компанії-розробника ПЗ',
                            'p5.Потреба виконання великої кількості повторних робіт, необхідних для зміни вимог до ПЗ',
                            'p6.Недооцінювання тривалості етапів реалізації програмного проекту з боку компанії-замовника ПЗ',
                            'p7.Переоцінювання тривалості етапів реалізації програмного проекту',
                            'p8.Остаточний розмір ПЗ перевищує заплановані його характеристики',
                            'p9.Остаточний розмір ПЗ значно менший за заплановані його характеристики',
                            'p10.Поява на ринку аналогічного ПЗ до виходу замовленого',
                            'p11.Поява на ринку більше конкурентоздатного ПЗ',
                            'm1.Низький моральний стан персоналу команди виконавців ПЗ',
                            'm2.Низька взаємодія між членами команди виконавців ПЗ',
                            'm3.Пасивність керівника(менеджера) програмного проекту',
                            'm4.Недостатня компетентність керівника(менеджера) програмного проекту',
                            'm5.Незадоволеність замовника результатами етапів реалізації програмного проекту',
                            'm6.Недостатня кількість фахівців у команді виконавців ПЗ з необхідним професійним рівнем',
                            'm7.Хвороба провідного виконавця в найкритичніший момент розроблення ПЗ',
                            'm8.Одночасна хвороба декількох виконавців під час розроблення ПЗ',
                            'm9.Неможливість організації необхідного навчання персоналу команди виконавців ПЗ',
                            'm10.Зміна пріоритетів у процесі управління програмним проектом',
                            'm11.Недооцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ',
                            'm12.Переоцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ',
                            'm13.Надмірне документування результатів на етапах реалізації програмного проекту',
                            'm14.Недостатнє документування результатів на етапах реалізації програмного проекту',
                            'm15.Нереалістичне прогнозування результатів на етапах реалізації програмного проекту',
                            'm16.Недостатній професійний рівень представників від компанії-замовника ПЗ'
                            ].map((value, i) => {
                                return <tr>
                                <td>
                                    {value}
                                </td>
                                {list[i]}
                                {ERPER[i]}
                                {ELRER[i]}
                                {EVRER[i]}
                                {Priority[i]}
                            </tr>
                            })
                        }
                    </tbody>
                </Table>
                <Modal.Dialog className="mt-4 mb-2">
                    <Modal.Header className="justify-content-center fs-5 text-danger">
                        Формалізована модель ймовірностей появи ризикових подій
                    </Modal.Header>
                    <Modal.Body className='result-font d-block text-align-left'>
                        <p className='mb-2 mt-2' id='tech-risk'>Технічні ризики : {risks[0]}%</p>
                        <p className='mb-2' id='financial-risk'>Фінансові ризики : {risks[1]}%</p>
                        <p className='mb-2' id='plan-risk'>Планові ризики : {risks[2]}%</p>
                        <p className='mb-2' id='management-risk'>Ризики управління : {risks[3]}%</p>
                        <p className='text-danger fs-4' id='general-risk'>Загалом : {
                            risks[0] + risks[1] + risks[2] + risks[3] > 100 ?
                            '100.000' : (risks[0] + risks[1] + risks[2] + risks[3]).toFixed(3)}%</p>
                        <h2 className='mt-5 text-danger fs-4'>Діапазон значень : </h2>
                        <p className='mb-2 mt-2' id='min-interval'>min : {min}</p>
                        <p className='mb-2 mt-2' id='max-interval'>max : {max}</p>
                        <h2 className='mt-5 text-danger fs-4'>Інтервал розподілу ризиків : </h2>
                        <p className='mb-2 mt-2' id='low-interval'>Низький : [{min}; {(min + mpr).toFixed(3)})</p>
                        <p className='mb-2 mt-2' id='middle-interval'>Середній : [{(min + mpr).toFixed(3)}; {(min + 2 * mpr).toFixed(3)})</p>
                        <p className='mb-2 mt-2' id='high-interval'>Високий : [{(min + 2 * mpr).toFixed(3)}; {max})</p>
                    </Modal.Body>
                </Modal.Dialog>
        </div>
    )
}