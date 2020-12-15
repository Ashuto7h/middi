import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import * as types from '../types';
import Message from './Message';
import ActionButton from './ActionButton';

const AlwaysScrollToBottom = () => {
  const elementRef = useRef<any>();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

const ChatBox = () => {
  const { appState, dispatch } = useContext<types.Context>(AppContext);
  const [queueIndex, setQueueIndex] = useState<number>(0);
  const [messages, setMessages] = useState<types.Message[]>([]);

  useEffect(() => {
    const next = appState.messages[queueIndex]
    const updatedMessages = [ ...messages, next ];
    setMessages(updatedMessages);
    if (queueIndex < appState.messages.length - 1) {
      const delay = next.delay;
      const timer = setTimeout(() => {
        setQueueIndex(queueIndex + 1);
      }, delay);
      return () => {
        clearTimeout(timer);
      }
    }
  }, [queueIndex])

  useEffect(() => {
    if (messages.length !== appState.messages.length) {
      setQueueIndex(queueIndex + 1);
    }
  }, [appState.messages])

  return (
    <div className="chatbox">
      <div className="chatbox__messages" >
        {messages.map((message: types.Message) => (
          message && <>
            <Message message={message} key={message.uuid} />
            <AlwaysScrollToBottom key={`${message.uuid}x`}/>
          </>
        ))}
      </div>
      <div className="chatbox__actions">
        {appState.actions && appState.actions.map((action: types.Action) => (
          <ActionButton action={action} key={action.uuid} />
        ))}
      </div>
    </div>
  );
}

export default ChatBox;
