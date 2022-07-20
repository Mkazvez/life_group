import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import DataGrid, {
    Column,
    FormItem,
    Editing,
    Paging,
    Lookup,
    Popup,
    Form,
    Pager,
    FilterRow,
    HeaderFilter
  } from 'devextreme-react/data-grid';
import { Item, Label } from 'devextreme-react/form';  
import 'devextreme-react/text-area';  
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import FileUploader from 'devextreme-react/file-uploader';

const objectsGrid = () => {  

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const idMails = useParams();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mails, setMails] = useState([]);
    

    async function getMails() {
      await axios.get(`${window.origin}/api/mails`)  
          .then(res => {
              setMails(res.data);
              console.log(res.data)
          });
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( () => {
        getMails()
      }, []);

    function insertRow(e) {

      axios.post(`${window.origin}/api/mails`, 
        { Name : e.data.Name=undefined?'':e.data.Name, 
          Email : e.data.Email=undefined?'':e.data.Email, 
          Phone : e.data.Phone=undefined?'':e.data.Phone, 
          Message : e.data.Message=undefined?'':e.data.Message, 
          Ip : e.data.Ip=undefined?'':e.data.Ip, 
          IdAdres : e.data.IdAdres=undefined?'':e.data.IdAdres, 
          Flat : e.data.Flat=undefined?'':e.data.Flat, 
          FileFull : e.data.FileFull=undefined?'':e.data.FileFull
        })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
      
    function removeRow(e) {
      console.log(e.key) // поле id
      const iddata = e.key
      axios.delete(`${window.origin}/api/mails/${iddata}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    function updateRow(e) {
      const iddata = e.key
      // console.log(blobImage)
      axios.put(`${window.origin}/api/mails/${iddata}`, 
        { Name : e.newData.Name=undefined?e.oldData.Name:e.newData.Name, 
        Email : e.newData.Email=undefined?e.oldData.Email:e.newData.Email, 
        Phone : e.newData.Phone=undefined?e.oldData.Phone:e.newData.Phone, 
        Message : e.newData.Message=undefined?e.oldData.Message:e.newData.Message,  
        Ip : e.newData.Ip=undefined?e.oldData.Ip:e.newData.Ip,  
        IdAdres : e.newData.IdAdres=undefined?e.oldData.IdAdres:e.newData.IdAdres,  
        Flat : e.newData.Flat=undefined?e.oldData.Flat:e.newData.Flat,  
        FileFull : e.newData.FileFull=undefined?e.oldData.FileFull:e.newData.FileFull  
      })
      .then(res => {
        console.log(res);
        //console.log(res.data);
      })

    }

    function onUpload(e) {

      const file = e.file;
      // const fileReader = new FileReader();
      // fileReader.onload = () => {
      //   setImage(fileReader.resultl)
      //   console.log(file)
      // };
      // fileReader.readAsDataURL(file);

      
      const file2 = JSON.parse(e.request.responseText)
      console.log('bb', file2)
      // console.log('aa', file.file.data.data)
      // var blob = file.file.data.data;
      // console.log(typeof blob)
      // const fs = require("fs");
      // // fs.writeFile("hello.txt", blob)

      // // // Convert the string to bytes
      // // var bytes = new Uint8Array(data.length / 2);

      // // for (var i = 0; i < data.length; i += 2) {
      // //     bytes[i / 2] = parseInt(data.substr(i, i + 2), /* base = */ 16);
      // // }

      // // // Make a Blob from the bytes
      // // var blob = new Blob([bytes], {type: 'image/bmp'});

      // var urlCreator = window.URL || window.webkitURL;
      // const objUrl = urlCreator.createObjectURL(new Blob(blob, {type: "image/png"}));
      // //window.open(objUrl)

      // // console.log(objUrl) 

      // let img = document.querySelector('img_news');
      // const v = new Blob(blob, {type: "image/png"})
      let reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onloadend = () =>  console.log('ЭТО BASE64 -> ',reader.result)
      
      const urlsrc =  URL.createObjectURL(file)
    //   setImage(urlsrc)
      // setpathPicture(urlsrc)
    //   setblobImage(file)
      console.log('url', urlsrc)




      // var URL = 'data:image/jpg;base64,'+data.data;
      // document.querySelector('#img').src = URL;

      // setImage(objUrl)
      // const chunk = {
      //   segmentSize: e.segmentSize,
      //   bytesLoaded: e.bytesLoaded,
      //   bytesTotal: e.bytesTotal,
      // };
      // this.setState({ chunks: [...this.state.chunks, chunk] });
    }
  
    // function onUploadStarted() {
    //   // this.setState({ chunks: [] });
    // }
  
    // function getValueInKb(value) {
    //   return `${(value / 1024).toFixed(0)}kb`;
    // }

    function onFilesUploaded(e) {
    }

    function onUploadStarted(e) {

      console.log("start", e.file.name, e,'qqq')
      const fileName = e.file.name
    //   setpathPicture(fileName)
      // axios.post(`${window.origin}/api/newss/saveupload`, 
      //    { fileName : fileName, 
      //    })
      //  .then(res => {
      //    console.log(res);
      // })      
    }
    function onRowUpdated(e) {
      console.log('edit', e, 'edit')
    }
    function onShowing(e) {
      // console.log('Showing', e, 'Showing')
    }
    async function onEditingStart(e) {
      // console.log('Editing', e.data.id, 'Editing')
    }


    const notesEditorOptions = { height: 100 };

    const pageSizes = [10];
    return (
      <div class="container-9 w-container">
          <h1 class="heading-object">Входящие обращения</h1>
              <div class="div-block-22">      
                    <DataGrid
                        dataSource={mails}
                        keyExpr="id"
                        // defaultColumns={columns}
                        showBorders={true}
                        onRowInserting={insertRow}
                        onRowRemoving={removeRow}
                        onRowUpdating={updateRow}
                        onEditingStart={onEditingStart}
                    >
                    <Paging enabled={false} />
                    <FilterRow visible={true} />
                    <HeaderFilter visible={true} />
                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowAdding={true}
                        allowDeleting={true}>
                    
                        <Popup title="Входящие обращения" showTitle={true} width={700} height={525} onShowing={onShowing}/>      
                        <Form>
                            <Item itemType="group" colCount={2} colSpan={2}>
                                <Item dataField="Name" />
                                <Item dataField="Email" />
                                <Item dataField="Phone" />
                                <Item
                                  dataField="Message"
                                  editorType="dxTextArea"
                                  colSpan={2}
                                  editorOptions={notesEditorOptions} />
                                <Item dataField="Ip" />
                                <Item dataField="Adres" />
                                <Item dataField="IdAdres" />
                                <Item dataField="Flat" />
                                <Item dataField="FileFull" />
                              </Item>  
                        </Form>    
                    </Editing>    
                        <Column dataField="Name" caption="ФИО" width={200} />
                        <Column dataField="Email" caption="Email" width={200} />
                        <Column dataField="Phone" caption="Телефон" width={70} />
                        <Column dataField="Message" caption="Обращение" width={100} />
                        <Column dataField="Ip" caption="Ip" width={70} />
                        <Column dataField="Adres" caption="Адрес" width={100} />
                        <Column dataField="IdAdres" caption="Код адреса" width={50} />
                        <Column dataField="Flat" caption="Квартира" width={50} />
                        <Column dataField="FileFull" caption="Имя файла" width={70} />
                        
                        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                        <Paging defaultPageSize={10} />
                    </DataGrid>    
             </div> 
           </div> 

  )
}  

export default objectsGrid;