import '../css/webflow.css'
import '../css/normalize.css'
import '../css/life-group.webflow.css'
import axios from 'axios';

import { useEffect, useState } from 'react';

const Houses = () => {  

    const [houses1, setHouse] = useState([]);
    
    async function getHouse() {
        await axios.get(`${window.origin}/api/objects`)  
            .then(res => {
                setHouse(res.data);
            });
    }

    useEffect( () => {
        getHouse()
        }, []);

    return (
        <div class="wf-section">
            <div data-w-id="8fff478a-227a-57fe-3e27-fc8dac93f9ff" class="container-4 w-container">
              <h2 class="heading-2">Наши дома</h2>
                  <div class="w-layout-grid grid">
                        {houses1.map((house, index) => (
                            <div class="div-block-6">
                                    <a href={`/house/${house.id}`} class="link-block-2 w-inline-block"><img src={house.logo_2} loading="lazy" width="103" alt="" class="image-6"/>
                                        <div class="object-link">{house.adres}</div>
                                    </a>
                            </div>
                      ))}
                  </div>
            </div>
        </div>
    )
}  

export default Houses;
