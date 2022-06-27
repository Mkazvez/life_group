import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'
import axios from 'axios';
import FileUpload from './c.js';

import { useEffect, useState } from 'react';

const Contact = () => {  
    
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Message, setMessage] = useState('');
    const [Status, setStatus] = useState('');
    const [visibleStatus, setVisileStatus] = useState(true);
    const [classStatus, setClassStatus] = useState('w-form-done');
    const [disabledi, setDisabled] = useState(false);
    const [ip, setIP] = useState('');
    const [adres, setAdres] = useState('');
    const [idAdres, setIdAdres] = useState(0);
    const [flat, setFlat] = useState('');
    const [fileFull, setFileFull] = useState('');
    const [houses, setHouse] = useState([]);
    const [filedata, setFileData] = useState(null);

    async function getHouse() {
        await axios.get(`api/objects`)  
            .then(res => {
                setHouse(res.data);
            });
    }

    function updateFile(valueFileFull) {
        console.log('2', valueFileFull, flat, adres)
        setFileFull(valueFileFull)
    }

    function updateFileData(valueFileData) {
//        console.log('data', valueFileData)
        setFileData(valueFileData)
    }

    function updateIdAdres(valueIdAdres) {
        console.log('valueIdAdres', valueIdAdres)
        const d = houses.find(item => item.adres === valueIdAdres)
        console.log(d)
        setAdres(valueIdAdres)
        setIdAdres(d.id?d.id:0)
    }

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        // console.log(res.data);
        setIP(res.data.IPv4)
      }

    useEffect(() => {
        setVisileStatus(false);
        setDisabled(false);
        getData();
        getHouse();
        // setFile(React.createRef())
     }, []);

    const onButtonPress = async (e) => {
        e.preventDefault();
        //console.log(Message)
        //window.alert('sss '+Name)
        // window.alert(Email)
        // window.alert(Phone)
        // window.alert(Message)
        const dataEmail = {
            Name: Name, Email: Email, Phone: Phone, Message: Message, Ip: ip, Adres: adres, IdAdres: idAdres, Flat: flat, FileFull: fileFull, FileMail: filedata
          }

        console.log('dataEmail', dataEmail)

        setDisabled(true)
        await axios.post('api/mails', {
            Name: Name, Email: Email, Phone: Phone, Message: Message, Ip: ip, Adres: adres, IdAdres: idAdres, Flat: flat, FileFull: fileFull, FileMail: null
          })
          .then(function (response) {
            console.log('OK', response);
            setClassStatus('w-form-done');
            setStatus('Thank you! Your submission has been received! Ваш IP ' + ip);
            setVisileStatus(true)
          })
          .catch(function (error) {
            console.log(error);
            setClassStatus('w-form-fail');
            setStatus('Oops! Something went wrong while submitting the form.');
            setVisileStatus(true)
          });

          setTimeout(() => {            
                document.getElementById('name-2').value = '';
                document.getElementById('email-2').value = '';
                document.getElementById('Phone-2').value = '';
                document.getElementById('field-2').value = '';
                document.getElementById('house-2').value = '';
                document.getElementById('flat-2').value = '';
                document.getElementById('upload-2').value = '';
                document.getElementById('name-3').value = 'ccc';
                // document.getElementById('image-2').value = '';
                setVisileStatus(false)
                setDisabled(false)
                console.log(FileUpload)
                // FileUpload.current.isEmptyFile()
            }, 2000);

          
    }
    
    return (
    <div class="section-2 wf-section">
        <div class="container-7 w-container">
            <h2 class="heading-2">Контакты</h2>
            <div class="div-block-10">
                <div>
                    <div>
                        <h4 class="heading-6">Адрес</h4>
                        <div class="text-block-12">Екатеринбург, ул. Шаумяна 87</div>
                    </div>
                    <div class="div-block-12">
                        <h4 class="heading-6">Телефон</h4>
                        <div class="text-block-13">+7 (343) 288-78-53</div>
                    </div>
                    <div class="div-block-11">
                        <h4 class="heading-6">Почта:</h4>
                        <div class="text-block-14">info@uklife.ru</div>
                    </div>
                    </div>
                        <div class="div-block-13">
                            <div class="w-form">
                                <form id="email-form" 
                                    name="email-form"
                                    data-name="Email Form" 
                                    class="form"
                                    // onSubmit = {onButtonPress}
                                    >
                                        <input type="text" class="text-field w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Имя" id="name-2"
                                        onChange = {(e) => setName(e.target.value)}>
                                        </input>
                                        <input type="email" class="text-field-2 w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Email" id="email-2" required=""
                                        onChange = {(e) => setEmail(e.target.value)}></input>
                                        <input type="tel" class="text-field-2 w-input" maxlength="256" name="Phone-2" data-name="Phone 2" placeholder="Телефон" id="Phone-2" required=""
                                        onChange = {(e) => setPhone(e.target.value)}></input>
                                        <textarea placeholder="Сообщение" maxlength="5000" id="field-2" name="field-2" data-name="Field 2" class="textarea w-input"
                                        onChange = {(e) => setMessage(e.target.value)}></textarea>
                                        {/* <input type="file" class="text-field-2 w-input" maxlength="256" name="File-2" data-name="File 2" placeholder="Файл" id="File-2" required=""
                                        onChange = {(e) => console.log(e.target.value)}>
                                        </input> */}
                                        <FileUpload updateFile={(filename) => updateFile(filename)} updateFileData={(data) => updateFileData(data)}/>
                                        <input list="list_houses" id="house-2" name="house-2" class="text-field-2 w-input" placeholder="Выберите дом" 
                                        onChange = {(e) => {updateIdAdres(e.target.value)}}/>
                                            <datalist id="list_houses">
                                            {houses.map((house, index) => (
                                                    <option value={house.adres}></option>
                                                ))}
                                            </datalist><p/>
                                        <input type="text" class="text-field w-input" maxlength="256" name="flat-2" data-name="Flat 2" placeholder="Квартира" id="flat-2"
                                        onChange = {(e) => setFlat(e.target.value)}>
                                        </input>

                                        <input type="submit" value="Отправить" data-wait="Please wait..." class="submit-button w-button" disabled={disabledi} onClick = {onButtonPress} 
                                        ></input>
                                </form>
                                {visibleStatus?
                                    <div class={classStatus}>
                                        <div>{Status}</div>
                                    </div>
                                    :<></>
                                }
                            </div>
                        </div>
            </div>
        </div>
    </div>
)}

export default Contact;
