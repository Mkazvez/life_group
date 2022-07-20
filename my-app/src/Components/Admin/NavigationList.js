/* eslint-disable default-case */
import React, { useCallback } from 'react';
import List from 'devextreme-react/list.js';
import { Link } from "react-router-dom";

import 'devextreme-react/text-area';  
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const navigation = [
    { id: 1, text: 'Дома в управление', icon: 'home', path: 'obj'},
    { id: 2, text: 'Новости', icon: 'globe', path: 'newsGrid'},
    { id: 3, text: 'Заявки', icon: 'export' },
    { id: 4, text: 'Служебные записки', icon: 'card' },
    { id: 5, text: 'Протоколы', icon: 'toolbox' },
    { id: 6, text: 'Выписки росреестра', icon: 'exportselected' },
    { id: 7, text: 'Начисление', icon: 'money' },
    { id: 8, text: 'ЦРГ', icon: 'doc' },
    { id: 9, text: 'Исходящие', icon: 'message' },
    { id: 10, text: 'Сотрудники', icon: 'user' },
  ];
  

  function NavigationList(props){
    const closeDrawer = () => {
        props.stateHandler(false);
    }

    function clicknav(e){
      const id = e.target.id
      props.stateNews(false);
      props.stateObject(false);
      props.stateMail(false);
      switch (id) {
        case "idtxt_1": {
          props.stateObject(true);
          break;
        }
        case "idtxt_2": {
          props.stateNews(true);
          break;
        }
        case "idtxt_3": {
          props.stateMail(true);
          break;
        }
      }
    }  

    const renderItem = useCallback((data) => {
        return (
            <div>
                {/* <Link to={'/admin/' + data.path}> */}
                    <div>
                        <div className="dx-list-item-icon-container">
                            <i className={`dx-icon dx-list-item-icon dx-icon-${data.icon}`}></i>
                        </div>
                        <span id={'idtxt_'+data.id} onClick={clicknav}>{data.text}</span>
                    </div>
                {/* </Link> */}
            </div>
        );
    }, [])

    return (
      <div>
        <List
          items={navigation}
          width={200}
          selectionMode="single"
          // onSelectionChanged={closeDrawer}
          itemRender={renderItem}
        />
      </div>
    );
}

export default NavigationList;
