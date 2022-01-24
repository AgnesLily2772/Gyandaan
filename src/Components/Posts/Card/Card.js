import React from "react"
import Img from '../../Images/default.png';
import './Cards.css'
const Card =({user,selectCard}) => {
    return (
      <div className='card' onClick={()=>selectCard(user)}>
          <div className='user-info'>
            <img className='image-pic' src={Img} alt="not found"/>
            <div className="colour">
            {user.isOnline ? <p className="online">Online</p> : <p className="offline">Offline</p>}

            </div>
            
            <div>
              <h4>{user.fullName}</h4>
              <p>Location : {user.location}</p>
              {user.selected =="mentor" ? 
              (<div>
                <p>Profession : {user.profession}</p> 
                <p>Specilized in : {user.specialized}</p>  
              </div>
              ) : (
                <p>Education : {user.education}</p>  
              )
            }
            </div>
        </div>
      </div>
 );
}
export default Card;