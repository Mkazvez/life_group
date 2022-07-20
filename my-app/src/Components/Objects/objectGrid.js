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
    const idOblects = useParams();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [objects, setObjects] = useState([]);
// eslint-disable-next-line react-hooks/rules-of-hooks    
    const [image_1, setImage_1] = useState('')
// eslint-disable-next-line react-hooks/rules-of-hooks    
    const [image_2, setImage_2] = useState('')
    

    async function getObjects() {
      await axios.get(`${window.origin}/api/objects`)  
          .then(res => {
              setObjects(res.data);
              console.log(res.data)
          });
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( () => {
        getObjects()
      }, []);

    function insertRow(e) {

      axios.post(`${window.origin}/api/objects`, 
        { adres : e.data.adres=undefined?'':e.data.adres, 
          build : e.data.build=undefined?'':e.data.build, 
          qty_etazh : e.data.qty_etazh=undefined?'':e.data.qty_etazh, 
          sq_all : e.data.sq_all=undefined?'':e.data.sq_all, 
          q_flats : e.data.q_flats=undefined?'':e.data.q_flats, 
          wall : e.data.wall=undefined?'':e.data.wall, 
          qty_pod : e.data.qty_pod=undefined?'':e.data.qty_pod, 
          qty_flat : e.data.qty_flat=undefined?'':e.data.qty_flat, 
          logo_1 : e.data.logo_1=undefined?'':e.data.logo_1, 
          logo_2 : e.data.logo_2=undefined?'':e.data.logo_2 
        })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
      
    function removeRow(e) {
      console.log(e.key) // поле id
      const iddata = e.key
      axios.delete(`${window.origin}/api/objects/${iddata}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    function updateRow(e) {
      const iddata = e.key
      // console.log(blobImage)
      axios.put(`${window.origin}/api/objects/${iddata}`, 
        { adres : e.newData.adres=undefined?e.oldData.adres:e.newData.adres, 
        build : e.newData.build=undefined?e.oldData.build:e.newData.build, 
        qty_etazh : e.newData.qty_etazh=undefined?e.oldData.qty_etazh:e.newData.qty_etazh, 
        sq_all : e.newData.sq_all=undefined?e.oldData.sq_all:e.newData.sq_all,  
        q_flats : e.newData.q_flats=undefined?e.oldData.q_flats:e.newData.q_flats,  
        wall : e.newData.wall=undefined?e.oldData.wall:e.newData.wall,  
        qty_pod : e.newData.qty_pod=undefined?e.oldData.qty_pod:e.newData.qty_pod,  
        qty_flat : e.newData.qty_flat=undefined?e.oldData.qty_flat:e.newData.qty_flat,  
        logo_1 : e.newData.logo_1=undefined?e.oldData.logo_1:e.newData.logo_1,  
        logo_2 : e.newData.logo_2=undefined?e.oldData.logo_2:e.newData.logo_2  
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
      setImage_2("/"+e.data.logo_2)
      setImage_1(e.data.logo_1)
    }


    const notesEditorOptions = { height: 100 };

    const pageSizes = [10];
    return (
      <div class="container-9 w-container">
          <h1 class="heading-object">МКД в управлении</h1>
              <div class="div-block-22">      
                    <DataGrid
                        dataSource={objects}
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
                    
                        <Popup title="Редактирование МКД" showTitle={true} width={700} height={525} onShowing={onShowing}/>      
                        <Form>
                            <Item itemType="group" colCount={2} colSpan={2}>
                                <Item dataField="adres" />
                                <Item dataField="build" />
                                <Item dataField="qty_etazh" />
                                <Item dataField="sq_all" />
                                <Item dataField="q_flats" />
                                <Item dataField="wall" />
                                <Item dataField="qty_pod" />
                                <Item dataField="qty_flat" />
                                <Item dataField="logo_1" />
                                <Item dataField="logo_2" />
                              </Item>  
                              <Item itemType="group_l1" colCount={2} colSpan={2}>
                                {image_1 && <div class="div-block-23"><img id='logo_1' src={image_1} alt="img"/></div>}        
                              {/* </Item>
                              <Item itemType="group_l2" colCount={2} colSpan={2}> */}
                                {image_2 && <div class="div-block-23"><img id='logo_2' src={image_2} alt="img"/></div>}        
                              </Item>
                            
                        </Form>    
                    </Editing>    
                        <Column dataField="id" caption="ИД" width={50} />
                        <Column dataField="adres" caption="Адрес" width={300} />
                        <Column dataField="build" caption="Год" width={70} />
                        <Column dataField="qty_etazh" caption="Кол-во этажей" width={100} />
                        <Column dataField="sq_all" caption="Площадь" width={70} />
                        <Column dataField="q_flats" caption="Кол-во квартир" width={70} />
                        <Column dataField="wall" caption="Материал стен" width={150} />
                        <Column dataField="qty_pod" caption="Кол-во подъездов" width={70} />
                        <Column dataField="qty_flat" caption="Кол-во квартир" width={70} />
                        <Column dataField="logo_1" caption="Лого 1" width={70} visible={false} />
                        <Column dataField="logo_2" caption="Лого 2" width={70} visible={false} />
                        
                        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                        <Paging defaultPageSize={10} />
                    </DataGrid>    
             </div> 
           </div> 

  )
}  

export default objectsGrid;