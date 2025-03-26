import { useModal } from '../contextProvider/contextProvider';
import './Message.css';

export default function Message() {

    const {msg} = useModal();

    return(
        <div className="msg-container">
            <div className={msg.msg ? 'msg-wrapper visible' : 'msg-wrapper'} style={{backgroundColor: msg.color}}>
                <p className='msg'>{msg.msg}</p>
            </div>
        </div>

    );
}