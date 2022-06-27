// import React from "react";
import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'
import { forwardRef, useState } from 'react';
import axios from 'axios';
const fs = require('fs');

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
const FileUpload = forwardRef((fileFull) => {
  // State to store uploaded file
  const [file, setFile] = useState("");

  function isEmptyFile() {
    console.log('q')
    setFile('')
  }

  // Handles file upload event and updates state
  function handleUpload(event) {
    // setFile(event.target.files[0]);
    // fileFull.fileFull = event.target.files[0];
    // console.log('f', fileFull.fileFull,'s');
    fileFull.updateFile(event.target.files[0].name);
    // let dataBuffer = fs.readFile('ssss.ss');
   // console.log('qq1',event.target.files[0])
    setFile(event.target.files[0]);
    // console.log('qq', dataBuffer)
    //const q = updateFile;
    //fileFull = file.name
    // Add code here to upload file to server
    // ...
  }

  const uploadFile = (e) => {
    e.preventDefault();
    const formData = new FormData();        
    formData.append('file', file); // appending file
    axios.post('api/mails/upload', formData, {
        // onUploadProgress: (ProgressEvent) => {
        //     let progress = Math.round(
        //     ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
        //     setProgess(progress);
        // }
    }).then(res => {
     //   console.log('sss',res);
        fileFull.updateFileData(res.data)

        // getFile({ name: res.data.name,
        //          path: res.data.path
        //        })
    }).catch(err => console.log(err))}

  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} id="upload-2"/>
      <input type="text" class="text-field w-input" id='name-3' value={`Имя файла: ${file.name}`}></input>
      <input type="text" class="text-field w-input" id='type-3' value={`Тип файла: ${file.type}`}></input>
      <input type="text" class="text-field w-input" id='size-3' value={`Размер файла: ${file.size} bytes`}></input>
      {file && <ImageThumb id="image-2" image={file} />}
      <button onClick={uploadFile} class="submit-button w-button">                   
        Загрузить
      </button>

    </div>
  );
})

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};


export default FileUpload;
