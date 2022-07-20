/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";

import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
// import '../css/webflow.css'
// import '../css/normalize.css'
// import '../css/life-group.webflow.css'

const Pays = props => {  

    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
        props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    return ReactDOM.createPortal(
        <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
        >
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">
                <p ><strong>ООО &laquo;Развитие ЖКХ&raquo;</strong> является оператором по приему платежей для<strong> ООО УК &laquo;Лайф Групп&raquo;</strong>
                в части приема платы за жилищно-коммунальные услуги. Оплатить <strong>БЕЗ КОМИССИИ</strong> за ЖКУ Вы можете через Мобильное приложение &laquo;
                <a href="https://moydomonline.ru/#home"> Мой Дом Онлайн</a>&raquo;, через <a href="/personalcabinet">Личный кабинет</a>, платежные терминалы &laquo;<strong>Telepay</strong>&raquo;, 
                через <strong>ПАО &laquo;Сбер</strong>&raquo; на счет <strong>ООО &laquo;Развитие ЖКХ&raquo;</strong>, иным безналичным способом по следующим реквизитам:</p>
                <p >&nbsp;В графе &laquo;назначение платежа&raquo; необходимо указывать номер лицевого счета и адрес, в противном случае, Ваш платеж может быть не идентифицирован.</p>
                <p >Обратите, пожалуйста, внимание! ООО &laquo;<strong>Развитие ЖКХ</strong>&raquo; не принимает платежи по взносу на капитальный ремонт.</p>
                <p >В соответствии со статьей 155 ЖК РФ, пунктами 63 и 65 Правил № 354 от 06.05.2011 года, а также статьей 3 Федерального закона от 03.06.2009 года № 103 плата за жилое помещение и коммунальные услуги вносится потребителями исполнителю либо действующему по его поручению платежному агенту или банковскому платежному агенту, при этом платежный агент при приеме платежей вправе взимать с плательщика вознаграждение.</p>
            </div>
            <div className="modal-footer">
                <button onClick={props.onClose} class="submit-button w-button">
                    Закрыть
                </button>
            </div>
            </div>
        </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}  

export default Pays;