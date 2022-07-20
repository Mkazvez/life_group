import React, { useEffect } from "react";

import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
// import pic_san from '../../static/images/pic_san.jpg';
import afonyaGif from "../../static/images/afonya.gif";

// import '../css/webflow.css'
// import '../css/normalize.css'
// import '../css/life-group.webflow.css'



const News = props => {  

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
    });

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
                {props.children}
                <img src={afonyaGif} alt="wait until the page loads" />
                {/* <img src={pic_san} alt="wait until the page loads" /> */}
            </div>
            <div className="modal-footer">
                <button onClick={props.onClose} class="submit-button w-button">
                Close
                </button>
            </div>
            </div>
        </div>
        </CSSTransition>,
        document.getElementById("root")
    );
}  

export default News;