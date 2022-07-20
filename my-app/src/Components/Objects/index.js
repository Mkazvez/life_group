/* eslint-disable react-hooks/exhaustive-deps */
import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'
import axios from 'axios';
// import logo1 from "../images/dom1.png"
// import logo2 from "../images/2021-07-29_11-03-46-2.png"
// import logo3 from "../images/2021-07-29_11-03-46-3.png"
// import logo4 from "../images/2021-07-29_11-03-46-4.png"
// import logo5 from "../images/2021-07-29_11-03-46-5.png"
// import logo6 from "../images/2021-07-29_11-03-46-6.png"
// import logo7 from "../images/2021-07-29_11-03-46-7.png"
// import logo8 from "../images/2021-07-29_11-03-46-8.png"
// import logo9 from "../images/2021-07-29_11-03-46-9.png"
// import logo10 from "../images/2021-07-29_11-03-46-10.png"
// import logo11 from "../images/2021-07-29_11-03-46-11.png"
// import logo12 from "../images/2021-07-29_11-03-46-12.png"
// import logo13 from "../images/2021-07-29_11-03-46-13.png"
// import logo14 from "../images/2021-07-29_11-03-46-14.png"
// import logo15 from "../images/dom1.png"

import { useEffect, useState } from 'react';

const Objects = () => {  
    const [houses1, setHouse] = useState([]);
    
    useEffect(async () => {
    await axios.get(`api/objects`)  
        .then(res => {
            setHouse(res.data);
        });
    }, []);

   
    // const houses = [
    //     {id:1, src:logo1, adres:"ул. Шолохова, д. 2/3", build: "2021", wall: "монолитный ж/б", qty_etazh: "20", qty_pod: "1", qty_flat: "166"},
    //     {id:1, src:logo2, adres:"ул. Гурзуфская, д. 11", build: "2021", wall: "монолитный ж/б", qty_etazh: "20", qty_pod: "1", qty_flat: "166"},
    //     {id:1, src:logo3, adres:"ул. Шаумяна, д. 87, корп. 2", build: "2018", qty_etazh: "3-4-18-28", sq_all: "26834.8", sq_flats: "20205.9"},
    //     {id:1, src:logo4, adres:"ул. Инженерная, д. 61", build: "2018", qty_etazh: "9-20", sq_all: "14539,1", sq_flats: "11431,8"},
    //     {id:1, src:logo5, adres:"ул. Славянская, д. 60", build: "1972", qty_etazh: "5", sq_all: "2774,3", sq_flats: "2633,7"},
    //     {id:1, src:logo6, adres:"ул. Чайковского, д. 86в", build: "2016", qty_etazh: "23", sq_all: "13298,8", sq_flats: "9824,7"},
    //     {id:1, src:logo7, adres:"ул. Бахчиванджи, д. 22, корп. А", build: "2015", qty_etazh: "14, 15", sq_all: "14381,6", sq_flats: "10120,1"},
    //     {id:1, src:logo8, adres:"ул. Шаумяна, д. 87", build: "2016", qty_etazh: "13-18, 19-28", sq_all: "57573,9", sq_flats: "37557,2"},
    //     {id:1, src:logo9, adres:"ул. Латвийская, д. 54", build: "2015", qty_etazh: "12, 16 + чердак", sq_all: "28563,3", sq_flats: "18276,3"},
    //     {id:1, src:logo10, adres:"пер. Многостаночников, д. 22", build: "1991/2000", qty_etazh: "5", sq_all: "3509,5", sq_flats: "2163,5"},
    //     {id:1, src:logo11, adres:"пер. Трактористов, д. 10", build: "2015", qty_etazh: "13-15-17", sq_all: "10 843,10", sq_flats: "6 857,3"},
    //     {id:1, src:logo12, adres:"ул. Репина, д.68", build: "2015", qty_etazh: "28",sq_all: "19163,4", sq_flats: "13647,9"},
    //     {id:1, src:logo13, adres:"ул. Татищева, д. 126", build: "2015", qty_etazh: "25", sq_all: "15154,4", sq_flats: "10752,9"},
    //     {id:1, src:logo14, adres:"ул. Серафимы Дерябиной, д.53, корп. А", build: "2011", qty_etazh: "16", sq_all: "5731,3", sq_flats: "3120"},
    //     {id:1, src:logo15, adres:"ул. Чкалова, д. 240",build: "2014", qty_etazh: "11", sq_all: "9735.8", sq_flats: "6276.4"}
    // ]
    //console.log(`${process.env.REACT_APP_IMAGES_URL}/dom1.png`)
    return (
        <div class="wf-section">
            <div class="container-9 w-container">
                <h1 class="heading-man">НАШИ ДОМА</h1>
                <div class="div-block-21">
                    <div class="w-layout-grid grid-2">
                            {houses1.map((house, index) => (
                                <div id="w-node-_4af29f3a-8e46-fbf0-25b7-1a0a3c52ed9d-c104c2b1" class="div-block-19"><img src={"/"+house.logo_2} loading="lazy" alt=""/>
                                    <div class="div-block-20">
                                        <h4 class="heading-7">{house.adres}</h4>
                                        <div class="text-block-10">
                                            Год постройки: {house.build}<br />
                                            {house.wall ? `Материал стен: ${house.wall}`:''}{house.wall ? <br />:<></>}
                                            Количество этажей: {house.qty_etazh}<br />
                                            {house.qty_pod ? `Количество подъездов: ${house.qty_pod}`:''}{house.qty_pod ? <br />:<></>}
                                            {house.qty_flat ? `Количество помещений: ${house.qty_flat}`:''}{house.qty_flat ? <br />:<></>}
                                            {house.sq_all ? `Общая площадь дома (кв.м): ${house.sq_all}`:''}{house.sq_all ? <br />:<></>}
                                            {house.q_flats ? `Общая площадь жилых помещений (кв.м): ${house.q_flats}`:''}{house.q_flats ? <br />:<></>}
                                        </div>
                                        <a href={`/house/${house.id}`}>Подробнее</a>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>    
            </div>
        </div>
    )
}  

export default Objects;
