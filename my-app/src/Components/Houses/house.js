import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const House = () => {  

    //window.alert(id?id:'not')
    const id = useParams();
    console.log(id.id, `${window.origin}/api/objects/${id?id.id:'1'}`,window)
    const [house, setHouse] = useState([]);
    
    async function getHouse() {
        await axios.get(`${window.origin}/api/objects/${id?id.id:'1'}`)  
            .then(res => {
                setHouse(res.data);
            });
    }

    useEffect( () => {
        getHouse()
        }, []);

    return (
        <div class="wf-section">
            <div class="container-9 w-container">
            <h1 class="heading-object">{house.adres}</h1>
                <div class="div-block-22">
                    <div class="div-block-23"><img src={`/${house.logo_2}`} loading="lazy" alt=""/></div>
                    <div class="div-block-24">
                        <div class="text-block-11">
                            Год постройки: {house.build}<br />
                                            {house.wall ? `Материал стен: ${house.wall}`:''}{house.wall ? <br />:<></>}
                                            Количество этажей: {house.qty_etazh}<br />
                                            {house.qty_pod ? `Количество подъездов: ${house.qty_pod}`:''}{house.qty_pod ? <br />:<></>}
                                            {house.qty_flat ? `Количество помещений: ${house.qty_flat}`:''}{house.qty_flat ? <br />:<></>}
                                            {house.sq_all ? `Общая площадь дома (кв.м): ${house.sq_all}`:''}{house.sq_all ? <br />:<></>}
                                            {house.q_flats ? `Общая площадь жилых помещений (кв.м): ${house.q_flats}`:''}{house.q_flats ? <br />:<></>}                        </div>
                                            <br />Управляющий по дому: Засыпкин Михаил Михайлович, Григорьев Михаил Анатольевич
                        <a href="/">Форма 2. Сведения о многоквартирном доме, управление которым осуществляет управляющая организация</a>
                        <a href="/" class="link-5">Форма 2.1. Общие сведения о многоквартирном доме</a>
                        <a href="/" class="link-5">Форма 2.2. Сведения об основных конструктивных элементах многоквартирного дома, оборудовании и системах инженерно-технического обеспечения, входящих в состав общего имущества в многоквартирном доме</a>
                        <a href="/" class="link-5">Форма 2.3. Сведения о выполняемых работах (оказываемых услугах) по содержанию и ремонту общего имущества в многоквартирном доме, иных услугах, связанных с достижением целей управления многоквартирным домом (заполняется по каждой выполняемой работе (оказываемой услуге))</a>
                        <a href="/" class="link-5">Форма 2.4. Сведения об оказываемых коммунальных услугах (заполняется по каждой коммунальной услуге)</a>
                        <a href="/" class="link-5">Форма 2.5. Сведения об использовании общего имущества в многоквартирном доме (заполняется по каждому используемому объекту общего имущества)</a>
                        <a href="/" class="link-5">Форма 2.6. Сведения о капитальном ремонте общего имущества в многоквартирном доме</a>
                        <a href="/" class="link-5">Форма 2.7. Сведения о проведенных общих собраниях собственников помещений в многоквартирном доме (заполняется по каждому собранию собственников помещений)</a>
                        <a href="/" class="link-5">Форма 2.8. Отчет об исполнении управляющей организацией договора управления, а также о выполнении товариществом, кооперативом смет доходов и расходов</a>
                        <a href="/" class="link-5">Форма 2.8 Отчет об исполнении управляющей организацией договора управления за 2016 год</a>
                        <a href="/" class="link-5">Форма 2.8 Отчет об исполнении управляющей организацией договора управления за 2017 год</a>
                        <a href="/" class="link-5">Форма 2.8 Отчет об исполнении управляющей организацией договора управления за 2018 год</a>
                        <a href="/" class="link-5">Форма 2.8 Отчет об исполнении управляющей организацией договора управления за 2019 год</a>
                        <a href="/" class="link-5">Форма 2.8 Отчет об исполнении управляющей организацией договора управления за 2020 год</a>
                    </div> 
                </div> 

            </div>
        </div>
  )
}  

export default House;