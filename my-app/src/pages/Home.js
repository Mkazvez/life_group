import React, { Component } from 'react';
//import CarouselBox from '../Components/CarouselBox';
import Standart from '../Components/Standart';
import Contact from '../Components/Contact';
import Payment from '../Components/Payment';
import Links from '../Components/Links';
import News from '../Components/News';
import Houses from '../Components/Houses';

export default class Home extends Component {
    render() {
        return (
            <>
                    <Standart/>
                    <News/>
                    <Houses/>
                    <Payment/>
                    <Links/>
                    <Contact/>
            </>
        )
    }
}
