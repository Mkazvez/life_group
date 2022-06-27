import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'

import rosreestr from '../images/roseestr.png';
import gisgkh from '../images/gisgkh.png';
import gosuslugi from '../images/gosuslugi.png';
import sberbank from '../images/sberbank.png';
import reforma from '../images/partner-logo8-active.png';

const Links = () => {  
    return (
        <div class="wf-section">
        <div data-w-id="e84a8188-9563-d7fc-f07f-f05e29ffa296" class="container-6 w-container">
          <h2 class="heading-2">Полезные ссылки</h2>
          <div class="div-block-9">
            <div class="div-block-8"><img src={rosreestr} loading="lazy" width="100" alt=""/>
              <a href="https://www.rosreestr.ru" target="_blank" class="link-3" rel="noreferrer">rosreestr.ru</a>
              <div class="text-block">Федеральная служба государственной регистрации, кадастра и картографии</div>
            </div>
            <div class="div-block-8"><img src={gisgkh} loading="lazy" width="100" alt=""/>
              <a href="https://www.dom.gosuslugi.ru" target="_blank" class="link-3" rel="noreferrer">dom.gosuslugi.ru</a>
              <div class="text-block-2">ГИС ЖКХ — государственная информационная система жилищно-коммунального хозяйства</div>
            </div>
            <div class="div-block-8"><img src={reforma} loading="lazy" alt=""/>
              <a href="https://www.reformagkh.ru" target="_blank" class="link-3" rel="noreferrer">reformagkh.ru</a>
              <div class="text-block-3">РазвитиеЖКХ</div>
            </div>
            <div class="div-block-8"><img src={gosuslugi} loading="lazy" width="100" alt=""/>
              <a href="https://www.gosuslugi.ru" target="_blank" class="link-3" rel="noreferrer">gosuslugi.ru</a>
              <div class="text-block-4">Официальный интернет-портал государственных услуг</div>
            </div>
            <div class="div-block-8"><img src={sberbank} loading="lazy" width="100" alt=""/>
              <a href="https://online.sberbank.ru" target="_blank" class="link-3" rel="noreferrer">online.sberbank.ru</a>
              <div class="text-block-5">Сбербанк Онлайн</div>
            </div>
          </div>
        </div>
      </div>
    )
}  

export default Links;