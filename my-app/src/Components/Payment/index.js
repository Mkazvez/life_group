import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'

import logo from '../images/kaktus1-1.png';

const Payment = () => {  
    return (
        <div class="section wf-section">
        <div data-w-id="eb763ee2-fdb3-bb60-e8a0-e31ba1a56ba0" class="container-5 w-container">
          <div class="div-block-7">
            <h2 class="heading-5">Оплачивайте услуги ЖКХ не выходя из дома</h2>
            <a href="/personalcabinet" class="button-1 w-button">Перейти в личный кабинет</a>
          </div>
          <div class="div-block-18"><img src={logo} loading="lazy" width="190" alt="" class="image-5"/></div>
        </div>
      </div>
      )
}  

export default Payment;
