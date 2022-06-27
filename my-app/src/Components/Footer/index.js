import logo from '../../static/images/lifee-group-logo.svg';
import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'

const Footer = () => {  return (
    <div class="section-3 wf-section">
        <div class="container-8 w-container">
            <div class="div-block-14">
                <div class="div-block-15"><img src={logo} loading="lazy" width="170" alt="" class="image-13"/>
                    <div class="text-block-6">2021 ООО УК &quot;ЛАЙФ ГРУПП&quot; <br /> ИНН: 6658476470 </div>
                </div>
                <div class="div-block-16">
                    <a href="/objects" class="link-4">Наши дома</a>
                    <a href="/about" class="link-4">О компании</a>
                    <a href="/" class="link-4">Услуги</a>
                    <a href="/" class="link-4">Новости</a>
                    <a href="/" class="link-4">Контакты</a>
                </div>
                <div class="div-block-17">
                    <div class="text-block-7">+7 (343) 288-78-53</div>
                    <div class="text-block-8">Екатеринбург, ул.Шаумяна 87</div>
                    <div class="text-block-9">Политика конфиденциальности</div>
                </div>
            </div>
        </div>
    </div>
  )
}  

export default Footer;