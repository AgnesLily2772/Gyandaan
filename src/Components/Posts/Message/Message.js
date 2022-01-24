import react from 'react';
import {GrAttachment} from 'react-icons/gr';
import {AiOutlineSend} from 'react-icons/ai';
import './Message.css'
const Message = () => {
    return(
            <form className='message-input'>
                <div className='input'>
                <input className='file-input' type="file"/>
                    <input className='text-input' placeholder='Message' type='text'/>
                </div>
                <div>
                    <button className='submit'>Send</button>
                </div>
            </form>
    )
}
export default Message;