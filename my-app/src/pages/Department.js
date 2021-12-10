import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import {Grid, Paper} from '@material-ui/core';
import axios, { post } from 'axios';
import DataGrid, { Column, Pager, Paging, Export, FilterRow, FilterPanel, HeaderFilter, Scrolling, Selection,  Editing} from 'devextreme-react/data-grid';
import FileUploader from 'devextreme-react/file-uploader';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { ContactSupportOutlined } from '@material-ui/icons';
import FileUpload from '../Components/fileupload';
import { Box, Typography, Button, ListItem, withStyles } from '@material-ui/core';


//const columns = ['dateload', 'inqty', 'noqty', 'resultqty', 'innotqty', 'shareprocent'];

export default class Department extends Component {
    "use strict";
    constructor() {
        super()
        this.role = window.localStorage.getItem('in_role')
        this.fio = window.localStorage.getItem('in_fio')
        this.state = {
          reportgeneral: [],
          allMode: 'allPages',
          checkBoxesMode: 'onClick',
          file:null
        };
        this.onCheckBoxesModeChanged = this.onCheckBoxesModeChanged.bind(this);
        this.onAllModeChanged = this.onAllModeChanged.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.selectionChanged = this.selectionChanged.bind(this);
        this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
        this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
        this.onRowInserted = this.logEvent.bind(this, 'RowInserted');
        this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
        this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
   
        // if (role !== 'admin') {
    //       replace('/')
    //     }
    }
      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
          this.loadTable();

        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = 'api/results/upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
      }

      loadTable() {
        axios.get(`api/departments`)  
          .then(res => {
            const result = res.data;
            this.setState({ result });
          })
          this.setState({file:''})  
      }

      logEvent(e, eventName) {
        console.log(eventName, e)  
        if (e === 'RowInserting') {
            console.log(e, eventName.data.name)  
            const v_name = String(eventName.data.name)
            console.log(typeof v_name)  
            axios.post('api/departments', {
                name: v_name
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        if (e === 'RowUpdated') {
            console.log(e, eventName.data.name)  
            const v_name = String(eventName.data.name)
            const v_id = String(eventName.data.id)
            console.log(typeof v_name)  
            axios.put('api/departments/'+v_id, {
                name: v_name
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        this.setState((state) => {
          return { events: [eventName].concat(state.events) };
        });
      }

      componentDidMount() {
          this.loadTable();
      }
    
    render() {
        const { allMode, checkBoxesMode } = this.state;
            return (
                <div>
                  <DataGrid
                      style={{ height: '80vh' }}
                      dataSource= {this.state.result}
  //                    defaultColumns={columns}
                      showBorders={true}
                      columnsAutoWidth="true"
                      onToolbarPreparing={this.onToolbarPreparing}
                      onRowInserting={this.onRowInserting}
                      onRowInserted={this.onRowInserted}
                      onRowUpdating={this.onRowUpdating}
                      onRowUpdated={this.onRowUpdated}
                  >
                  <Selection
                    mode="multiple"
                    selectAllMode={allMode}
                    showCheckBoxesMode={checkBoxesMode}
                  />
                    <FilterRow visible={true} />
                    <FilterPanel visible={true} />
                    <HeaderFilter visible={true} />
                    <Scrolling mode="infinite" />
                    <Paging defaultPageSize={20} />
                    <Editing
                        mode="cell"
                        allowUpdating={true}
                        allowAdding={true}
                        allowDeleting={true} 
                    />
                    <Pager
                        showPageSizeSelector={true}
                        allowedPageSizes={[5, 10, 20]}
                        showInfo={true} />
                    <Column dataField='id' caption='Id отдела' width='100'/>
                    <Column dataField='name' caption='Название отдела'/>
                    <Export enabled={true} allowExportSelectedData={true} />
                  </DataGrid>  
              </div>    
            )
     }
    
    selectionChanged(data) {
        this.setState({
          selectedItemKeys: data.selectedRowKeys
        });
    }
    
     onCheckBoxesModeChanged({ value }) {
      this.setState({ checkBoxesMode: value });
    }
  
    onAllModeChanged({ value }) {
      this.setState({ allMode: value });
    }   
    onSelectedFilesChanged(e) {
        console.log(e)
    }

    onSelectOptionChanged(e) {
        console.log(2,e)
    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items[0].showText = 'always';
        e.toolbarOptions.items.push({
          location: 'after',
          template: 'deleteButton'
        });
      }
    
}

