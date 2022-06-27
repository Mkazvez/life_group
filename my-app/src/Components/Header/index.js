//import { Button } from 'bootstrap';
import React, { Component, useState } from 'react';
// import { Nav, Navbar, FormControl, Container, Form, Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import logo from '../../static/images/lifee-group-logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../../pages/Home';
import Contacts from '../../pages/Contacts';
import About from '../../pages/About.js'
//import Reports from '../../pages/Reports';
//import Dataw from '../../pages/Dataw';
//import Registration from '../pages/RegistrationForm'
//import Login from '../pages/Login';
//import reg from '../../pages/reg';
//import result from '../../pages/Result';
//import department from '../../pages/Department';
import house from '../../pages/House';
import objects from '../../pages/Objects';
import personalcabinet from '../../pages/PersonalCabinet';
import error from '../../pages/Error';
import Pays from "./Pay"

import Footer from '../Footer';

import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'


// export default class Header extends Component {
//     constructor() {
//         super()
//         this.role = window.localStorage.getItem('in_role')
//         this.fio = window.localStorage.getItem('in_fio')
//     }
//     render() {
    const Header = () => {  
        const [showPay, setShowPay] = useState(false);
        return (
            <>
                <Navbar fixet="top">
                    <div class="body wf-section">
                        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navbar w-nav">
                            <div class="container w-container">
                                <a href="/" aria-current="page" class="brand w-nav-brand w--current"><img src={logo} loading="lazy" alt="" class="image"/></a>
                                <nav role="navigation" class="nav-menu w-nav-menu">
                                    <a href="/objects" class="nav-link w-nav-link">Наши дома</a>
                                    <a href="/about" class="nav-link-2 w-nav-link">О компании</a>
                                    <a onClick={() => setShowPay(true)} class="w-nav-link">Оплата</a>
                                    <a href="/" class="w-nav-link">Новости</a>
                                    <a href="/" class="w-nav-link">Контакты</a>
                                </nav>
                                <div class="w-nav-button">
                                    <div class="w-icon-nav-menu"></div>
                                </div>
                                <a href="/" class="phone-link">+7 (343) 288-78-53</a>
                                <a href="/personalcabinet" class="button w-button">Личный кабинет</a>
                            </div>
                        </div>
                    </div>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        {/* <Route exact path="/dataw" component={Dataw} />
                        <Route exact path="/reports" component={Reports} />
                        <Route exact path="/login" component={reg} />
                        <Route exact path="/reg" component={reg} />
                        <Route exact path="/result" component={result} />
                        <Route exact path="/department" component={department} /> */}
                        <Route exact path="/house/:id" component={house} />
                        <Route exact path="/objects" component={objects} />
                        <Route exact path="/personalcabinet" component={personalcabinet} />
                        <Route component={error} />
                    </Switch>
                </Router>
                <Navbar fixet="bottom">
                    <Footer/>
                </Navbar>
                <Pays title="Способы оплаты" onClose={() => {setShowPay(false);console.log("оплата")}} show={showPay}>
                    <p>Окно способов оплаты</p>
                </Pays>    
            </>
        )
    } 

    export default Header;