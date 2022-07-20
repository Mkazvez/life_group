import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'
import "./NavigationDrawer.css";
import 'devextreme-react/text-area';  
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import React from 'react';

import Drawer from 'devextreme-react/drawer';
import RadioGroup from 'devextreme-react/radio-group';
import { Toolbar, Item } from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';

import { useState, useEffect, useMemo, useCallback } from 'react';
import NavigationList from './NavigationList.js';
import NewsDataGrid from '../News/newsGrid.js';
import ObjectGrid from '../Objects/objectGrid.js';
import MailGrid from '../Mail/mailGrid.js';
import { Switch, Route } from "react-router-dom";

const Admin = () => {  
    const [open, setOpen] = useState(true);
    const [visibleNews, setvisibleNews] = useState(false);
    const [visibleObject, setObject] = useState(false);
    const [visibleMail, setMail] = useState(false);

    const buttonOptions = useMemo(() => {
        return {
            icon: "menu",
            onClick: () => {
                setOpen(!open );
            }
        };
    }, [open]);

    const renderList = useCallback(() => {
        const stateHandler = (newState) => setOpen(newState);
        const stateNews = (newNews) => setvisibleNews(newNews);
        const stateObject = (newObject) => setObject(newObject);
        const stateMail = (newMail) => setMail(newMail);
        return (
            <NavigationList 
                stateHandler={stateHandler} 
                stateNews={stateNews}
                stateObject={stateObject}
                stateMail={stateMail}
            />
        );
    }, []);

    return (
        <div class="wf-section">
          <div class="container-9 w-container">
                    <Toolbar id="toolbar">
                        <Item
                            widget="dxButton"
                            options={buttonOptions}
                            location="before"
                        />
                    </Toolbar>
                    <Drawer
                        revealMode="expand"
                        openedStateMode="overlap"
                        minSize={100}
                        height={650}
                        render={renderList}
                        opened={open}
                    >
                        <div id="view" style={{ display: visibleNews ? "block" : "none" }}>
                            <NewsDataGrid />
                        </div> 
                        <div id="view" style={{ display: visibleObject ? "block" : "none" }}>
                            <ObjectGrid />
                        </div> 
                        <div id="view" style={{ display: visibleMail ? "block" : "none" }}>
                            <MailGrid />
                        </div> 
                        <div id="view">
                            <div class="wf-section">
                                <div class="container-9 w-container">
                                    <div class="div-block-22">
                                    </div>      
                                </div>    
                            </div>    
                        </div>
                    </Drawer>
                    </div>
        </div>                    
    )
}  

export default Admin;