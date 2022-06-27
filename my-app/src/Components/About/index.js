import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'
import logo_eva_arrow from '../images/eva_arrow.png'

const About = () => {  return (
    <div class="wf-section">
    <div class="container-9 w-container">
      <h1 class="heading-man">О КОМПАНИИ</h1>
      <div class="div-block-22">
        <div class="div-block-23">
          <div class="div-block-25"><img src={logo_eva_arrow} loading="lazy" alt=""/>
            <a href="/" class="link-sidebar">Вакансии</a>
          </div>
          <div class="div-block-25"><img src={logo_eva_arrow} loading="lazy" alt=""/>
            <a href="/" class="link-sidebar">Тарифы</a>
          </div>
          <div class="div-block-25"><img src={logo_eva_arrow} loading="lazy" alt=""/>
            <a href="/" class="link-sidebar">Документы</a>
          </div>
          <div class="div-block-25"><img src={logo_eva_arrow} loading="lazy" alt=""/>
            <a href="/" class="link-sidebar">Реквизиты</a>
          </div>
          <div class="div-block-25"><img src={logo_eva_arrow} loading="lazy" alt=""/>
            <a href="/" class="link-sidebar">Информация для жителей</a>
          </div>
        </div>
        <div class="div-block-24">
          <div class="w-richtext">
            <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
            <h4>Static and dynamic content editing</h4>
            <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
            <h4>How to customize formatting for each rich text</h4>
            <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default About;
