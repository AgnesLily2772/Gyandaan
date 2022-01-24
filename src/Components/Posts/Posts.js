import React,{useState,useEffect} from 'react';
import {auth, db} from '../../imp';
import { collection,query,where,onSnapshot } from 'firebase/firestore';
import Card from './Card/Card';
import './Posts.css';
import Message from './Message/Message';
const Posts = () =>{
    const [users,setUsers] = useState([]);
    const [message,setMessage] = useState("");
    const user1 = auth.currentUser.uid;

    useEffect(() => {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("uid", "not-in", [user1]));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        setUsers(users);
      });
      return () => unsub();
    }, []);
    const selectCard =(user) => {
        setMessage(user)
        console.log(user)
    }
    return(
          <div className='screen'>
            <div>
            {users.map((user) => (<Card key={user.uid} user={user} selectCard={selectCard} />))}
            </div>
            {message ? (
            <div className='message'>
              <div className='post-name'>
                <div className='message-post'>
                <h3>{message.fullName}</h3>
                </div>
                </div><br/><hr/>
                <Message/>
            </div>
            ):(
                <h2 className='no-message'>Select someone to Share Knowledge</h2>)}
        </div>      
    )
}
export default Posts;