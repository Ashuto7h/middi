import React, { useEffect, useState, useContext, useRef } from 'react';
import * as types from '../types';
import Loading from './Loading';
import { AppContext } from '../App';
import { ReactComponent as Avatar } from './icons/avatar.svg';

const AlwaysScrollToBottom = () => {
    const elementRef = useRef<any>();
    useEffect(() => elementRef.current.scrollIntoView(), []);
    return <div ref={elementRef} />;
  };

type MessageProps = {
    message: types.Message;
};

const Message = ({ message }: MessageProps) => {
    const { dispatch } = useContext(AppContext);
    const { delay, messageClass, text, sender, showLoader, Component } = message;
    const [typing, setTyping] = useState(!!delay);
    const [waiting, setWaiting] = useState(!!delay);

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            setTyping(!typing);
            if (message.dispatchOnSend) {
                dispatch(message.dispatchOnSend);
            }
        }, delay)
        const delayTimeout = setTimeout(() => {
            setWaiting(!typing);
        }, delay*0.2)
        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(delayTimeout);
        };
    }, [delay]);

    return (
        <>
            { !waiting &&
                (typing
                    ? showLoader && <div className="message message--loading">
                        <Loading />
                        <AlwaysScrollToBottom key={`${message.uuid}x`}/>
                    </div>
                    : <>
                        <div className={`message message--sender-${sender} ${messageClass}`}>
                            {messageClass === 'message--initial' && <Avatar />}
                            {messageClass === 'message--component'
                                ? message.componentProps ? <Component {...message.componentProps} /> : <Component />
                                : <p>{ text }</p>
                            }
                            <AlwaysScrollToBottom key={`${message.uuid}x`}/>
                        </div>
                    </>
                )
            }
        </>
    )
};

export default Message;