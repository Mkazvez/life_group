//import logo from './Components/c1.png';
//mport './App.css';
//import { Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/normalize.css'
import './static/css/webflow.css'
import './static/css/life-group.webflow.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Contact from './Components/Contact';
// import Standart from './Components/Standart';
// import Payment from './Components/Payment';
// import Links from './Components/Links';
// import News from './Components/News';
// import Houses from './Components/Houses';

import React, { useEffect} from 'react';

function App() {
  useEffect(() => {
    document.title = "Life-Group";
  }, []);
  return (
    <>

      {/* <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/20.2.5/css/dx.common.css" />
      <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/20.2.5/css/dx.light.css" />

      <script src="https://unpkg.com/core-js@2.4.1/client/shim.min.js"></script>
      <script src="https://unpkg.com/systemjs@0.21.3/dist/system.js"></script>*/}
      <div> 
        <Header/>
      </div>
      {/* <div> 
        <Standart/>
      </div>
      <div> 
        <News/>
      </div>
      <div> 
        <Houses/>
      </div>
      <div> 
        <Payment/>
      </div>
      <div> 
        <Links/>
      </div>
      <div> 
        <Contact/>
      </div>
      <div> 
        <Footer/>
      </div>
 */}
    </>
  );
}

export default App;
