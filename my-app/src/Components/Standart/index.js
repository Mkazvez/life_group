// import logo from '../../static/images/illustration-02-2.png';
// import logo_500 from '../../static/images/illustration-02-2.png';
// import logo_800 from '../../static/images/illustration-02-2.png';
// import logo_1080 from '../../static/images/illustration-02-2.png 1080w';

// import logo2 from '../../static/images/illustration-02-1.png';


import icon1 from '../../static/images/icon1.png';
import icon2 from '../../static/images/icon2.png';
import icon3 from '../../static/images/icon3.png';
import React, { useState } from "react";
import Houses from "./houseInService.js";
import News from "./masterInHouse"

import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'


const Standart = () => {  
    const [showhouseInService, setShowhouseInService] = useState(false);
    const [showNews, setShowNews] = useState(false);

    return (
    <div class="hero-section wf-section">
        <div class="container-2 w-container">
            <div class="div-block">
                <h1 data-w-id="f2321262-6c64-e2ee-4d36-4c96838c4308" class="heading-1">Высокие стандарты <br />управления домами</h1>
            </div>
            <div class="div-block-2">
                <img src="/images/illustration-02-2.png" 
                    loading="lazy" 
                    sizes="(max-width: 479px) 210px, (max-width: 767px) 300px, (max-width: 991px) 400px, 620px" 
                    srcset="/images/illustration-02-2-p-500.png 500w, /images/illustration-02-2-p-800.png 800w, /images/illustration-02-2-p-1080.png 1080w, /images/illustration-02-2.png 1246w" 
                    alt="" class="image-2"/>
                <img src="/images/illustration-02-1.png" 
                    loading="lazy" 
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 280px, (max-width: 991px) 380px, 522px" 
                    srcset="/images/illustration-02-1-p-500.png 500w, /images/illustration-02-1-p-800.png 800w, /images/illustration-02-1.png 1044w" 
                    alt="" class="image-3"/>
            </div>


            {/* <div class="div-block-2">
                <img src={logo} 
                    loading="lazy" 
                    sizes="(max-width: 479px) 210px, (max-width: 767px) 300px, (max-width: 991px) 400px, 620px" 
                    // eslint-disable-next-line no-template-curly-in-string
                    // srcset='${logo_500} 500w, ${logo_800} 800w, ${logo_1080} 1080w, ${{logo}} 1246w'
                    //srcset={logo_1080}
                    alt="" class="image-2"/>
                <img src={logo2} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 280px, (max-width: 991px) 380px, 522px" 
                    // srcset="../../static/images/illustration-02-1-p-500.png 500w, ../../static/images/illustration-02-1-p-800.png 800w, ../../static/images/illustration-02-1.png 1044w" 
                    alt="" class="image-3"/>
            </div> */}
        </div>
        <div class="container-3 w-container">
            <div data-w-id="58eb8294-910b-b0cc-2604-21a05b0f6e69" class="div-block-3">
                <a onClick={() => setShowhouseInService(true)} class="link-block w-inline-block">
                    <img src={icon1} loading="lazy" width="100" alt="" class="image-10"/>
                    <h4 class="heading-4">Пригласить УК Лайф Групп в ваш дом</h4>
                </a>
            </div>
            <div data-w-id="873e69f2-4565-9605-fdad-f72740bf4acd" class="div-block-3">
                <a onClick={() => setShowNews(true)} class="link-block w-inline-block">
                    <img src={icon2} loading="lazy" width="110" alt="" class="image-11"/>
                    <h4 class="heading-4">Заказать выезд мастера на дом</h4>
                </a>
            </div>
            <div data-w-id="88fa1afe-ddc3-f87f-5ab2-6b5957d95da9" class="div-block-3">
                <a href="/personalcabinet" class="link-block w-inline-block">
                    <img src={icon3} loading="lazy" width="100" alt="" class="image-12"/>
                    <h4 class="heading-4">Сдать показания приборов учёта</h4>
                </a>
            </div>
            <Houses title="Пригласить дом в управление" onClose={() => setShowhouseInService(false)} show={showhouseInService}>
                <p>Окно приглашение дома в управление</p>
            </Houses>
            <News title="Вызов мастера" onClose={() => {setShowNews(false);console.log("мастер")}} show={showNews}>
                <p>Окно вызова мастера</p>
            </News>    
        </div>
  </div>
  )
}  


export default Standart;