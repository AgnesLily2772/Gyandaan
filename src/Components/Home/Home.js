import React,{useContext} from 'react';
import './Home.css';
import Slideshow from '../Home/Slideshow/slideshow';
import Popup from './Popup/Popup'
import {AuthContext} from "../Auth/Auth";
import {Link} from 'react-router-dom';
const Home = () =>{
    const {user} = useContext(AuthContext);
    return(
        <div>
            <Slideshow/>
            {/* <button className='btn btn-primary btn-lg start'>Get Started</button> */}
            {user ? (
                      <Link className="nav-link" to="/posts"><button className='btn btn-outline-success btn-lg start'>Get Started</button></Link>
                    ):(
                      <Link className="nav-link" to="/signin"><button className='btn btn-outline-success btn-lg start'>Get Started</button></Link>
            )}
            <Popup/>

        </div>
    )

}
export default Home;