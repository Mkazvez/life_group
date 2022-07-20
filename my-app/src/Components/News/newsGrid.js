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
// import { createStore } from 'devextreme-aspnet-data-nojquery';
import newsDefaultJpg from "../../static/images/2456034.jpg";



const newsGrid = () => {  
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
    
    const columns = ['id', 'date', 'title', 'news_text'];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const idNews = useParams();
    //   window.alert(newstop4.find(e => e.id = (idNews?idNews.id:'1') ).news_text)
      // console.log(id.id, `${window.origin}/api/objects/${id?id.id:'1'}`,window)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [news, setNews] = useState([]);
// eslint-disable-next-line react-hooks/rules-of-hooks    
    const [image, setImage] = useState(newsDefaultJpg)
// eslint-disable-next-line react-hooks/rules-of-hooks        
    const [blobImage, setblobImage] = useState([])
// eslint-disable-next-line react-hooks/rules-of-hooks            
    const [pathPicture, setpathPicture] = useState('')
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect( () => {
    //     if (idNews.id>0 && idNews.id<=newstop4.length) {
    //         setNews(newstop4.find(e => e.id === (idNews?idNews.id:'1') ))
    //         console.log(newstop4.find((e) => e.id === (idNews?idNews.id:'1') ))
    //     } else
    //     {setNews(newstop4.find(e => e.id === ('1') ))}    
    // }, []);

    async function getNews() {
      await axios.get(`${window.origin}/api/newss`)  
          .then(res => {
              setNews(res.data);
              console.log(res.data)
          });
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( () => {
        getNews()
      }, []);

    function insertRow(e) {

      axios.post(`${window.origin}/api/newss`, 
        { date : e.data.date=undefined?'':e.data.date, 
          title : e.data.title=undefined?'':e.data.title, 
          news_text : e.data.news_text=undefined?'':e.data.news_text, 
          picture : '', 
          pathPicture : pathPicture 
          // e.data.pathPicture=undefined?'':e.data.pathPicture 
        })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
      
    function removeRow(e) {
      console.log(e.key) // поле id
      const iddata = e.key
      axios.delete(`${window.origin}/api/newss/${iddata}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    function updateRow(e) {
      const iddata = e.key
      // console.log(blobImage)
      axios.put(`${window.origin}/api/newss/${iddata}`, 
        { date : e.newData.date=undefined?e.oldData.date:e.newData.date, 
          title : e.newData.title=undefined?e.oldData.title:e.newData.title, 
          news_text : e.newData.news_text=undefined?e.oldData.news_text:e.newData.news_text, 
          picture : '', 
          pathPicture : pathPicture
            // e.newData.pathPicture=undefined?e.oldData.pathPicture:e.newData.pathPicture 
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
      setImage(urlsrc)
      // setpathPicture(urlsrc)
      setblobImage(file)
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
      setpathPicture(fileName)
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
      const idNews = e.data.id
      await axios.get(`${window.origin}/api/newss/show/${idNews?idNews:'1'}/`)  
          .then(res => {
             console.log(res)
                   const file = `${window.origin}/api/newss/show/${idNews?idNews:'1'}/`;
                   setImage((file))
               })
          .catch(function (error) {
            setImage(newsDefaultJpg)
            if (error.response) { // get response with a status code not in range 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) { // no response
              console.log(error.request);
              // instance of XMLHttpRequest in the browser
              // instance ofhttp.ClientRequest in node.js
            } else { // Something wrong in setting up the request
              console.log('Error', error.message);
            }
            console.log(error.config);
          });     
    }


    const notesEditorOptions = { height: 100 };

    const pageSizes = [10];
    return (
      <div class="container-9 w-container">
          <h1 class="heading-object">Список новостей</h1>
              <div class="div-block-22">      
                    <DataGrid
                        dataSource={news}
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
                    
                        <Popup title="Редактирование новости" showTitle={true} width={700} height={525} onShowing={onShowing}/>      
                        <Form>
                            <Item itemType="group" colCount={2} colSpan={2}>
                                <Item dataField="date" />
                                <Item dataField="title" />
                                <Item
                                  dataField="news_text"
                                  editorType="dxTextArea"
                                  colSpan={2}
                                  editorOptions={notesEditorOptions} />
                                <Item dataField="pathPicture" /> 
                                
                              </Item>  
                              <Item itemType="groupi" colCount={2} colSpan={2}>
                                {image && <div class="div-block-23"><img id='img_news' src={image} alt="img"/></div>}        
                              </Item>
                              <Item itemType="group1" colCount={2} colSpan={2}>
                                {/* <React.Fragment> */}
                                  <FileUploader
                                    name="file"
                                    accept="image/*"
                                    uploadUrl={`${window.origin}/api/newss/upload`}
                                    selectButtonText="Выберите файл"
                                    labelText="или переместите сюда файлы"
                                    chunkSize={200000}
                                    onUploadStarted={onUploadStarted}
                                    onUploaded={onUpload} 
                                    onFilesUploaded={onFilesUploaded}
                                  />
                                  <span >Allowed file extensions: <span>.jpg, .jpeg, .gif, .png</span>.</span>
                                  <span > Максимальный размер файла: <span>4 MB.</span></span> 
                                  {/* <div className="chunk-panel">
                                    {
                                      this.state.chunks.map((c, i) => <div key={i}>
                                        <span>Chunk size:</span>
                                        <span className="segment-size dx-theme-accent-as-text-color">{getValueInKb(c.segmentSize)}</span>
                                        <span>, Uploaded:</span>
                                        <span className="loaded-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesLoaded)}</span>
                                        <span>/</span>
                                        <span className="total-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesTotal)}</span>
                                      </div>)
                                    }
                                  </div> */}
                                {/* </React.Fragment> */}
                              </Item>  
                            
                        </Form>    
                    </Editing>    
                        <Column dataField="id" caption="ИД" width={50} />
                        <Column dataField="date" caption="Дата" width={120} />
                        <Column dataField="title" caption="Заголовок" width={300} />
                        <Column dataField="news_text" caption="Новость" width={70} />
                        <Column dataField="pathPicture" caption="Путь до файла" width={70} visible={false} />
                        
                        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                        <Paging defaultPageSize={10} />
                    </DataGrid>    
             </div> 
           </div> 

  )
}  

export default newsGrid;