import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

const News = () => {  
    const newstop4 = [
        {id:'1', date:"1 июня 2021", title:"Отключение холодного водоснабжения с 13-00 час до 15-00 07 июля 2021 г. в связи с...", 
          news_text:"Отключение холодного водоснабжения с 13-00 час до 15-00 07 июля 2021 г. в связи с..."},
        {id:'2', date:"15 июня 2021", title:"Отключение холодного водоснабжения с 13-00 час до 15-00 07 июля 2021 г. в связи с...",
          news_text:"Отключение холодного водоснабжения с 13-00 час до 15-00 07 июля 2021 г. в связи с..."},
        {id:'3', date:"15 июня 2021", title:"О прекращении подачи газа 08 и 09 июня",
          news_text:"О прекращении подачи газа 08 и 09 июня"},
        {id:'4', date:"30 июня 2021", title:"График работы передвижных пунктов приема опасных отходов в июле 2021 года",
          news_text:"График работы передвижных пунктов приема опасных отходов в июле 2021 года"},
    ]
    
    const [news, setNews] = useState([]);
    async function getNews() {
      await axios.get(`${window.origin}/api/newss/top4`)  
          .then(res => {
              setNews(res.data);
          });
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( () => {
        getNews()
      }, []);

    return (
      <div class="wf-section">
        <div data-w-id="eac9a175-dd33-aa80-fbd6-92c250b747de" class="container-4 w-container">
          <h2 class="heading-2">Новости</h2>
          <div class="div-block-5">
            {news.map((newsrow, index) => (
                <div class="div-block-4">
                    <div class="news-date">{newsrow.date}</div>
                    <div class="news-text">{newsrow.title}</div>
                    <a href={`/newsInDetal/${newsrow.id}`} class="link-2">Подробнее</a>
                </div>
              
            ))}
          </div>
        </div>
      </div>
    )
}  

export default News;