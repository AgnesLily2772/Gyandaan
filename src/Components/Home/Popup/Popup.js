import React,{useState,useEffect} from 'react';
import './popup.css';
import welcome from './welcome-pic.png';
const Popup = (props) => {
    const [popup,setPopup] = useState(0);
     setTimeout(()=>{
         setPopup(true);
     },1000)
    
    return ((props.trigger) ? (
        <div className='popup'>
            <div className='popup-box'>
                <div className='above' alignItems='center'>
                <img src={welcome} alt="notfound"/>
                </div>    
                <button className='close' onClick={()=>props.setTrigger(false)}>X</button>
            </div> 
        </div>
    ):null);
}

export default Popup;
