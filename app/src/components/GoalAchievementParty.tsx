import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import Confetti from 'react-dom-confetti';
import { Events } from '../types';
import { EMIT_EVENT, MESSAGE_ADDED } from '../state/appReducer';
import { v4 as uuid } from 'uuid';

const GoalAchievementParty = () => {
    const { appState, dispatch } = useContext(AppContext);
    const [explode1, setExplode1] = useState(false);
    const [explode2, setExplode2] = useState(false);

    useEffect(() => {
        if (appState.eventEmitted === Events.GOAL_COMPLETED) {
            setExplode1(true);
            setTimeout(() => {
                setExplode2(true);
            }, 200)
            setExplode2(true);
            dispatch({
                type: EMIT_EVENT,
                payload: null
            });
            dispatch({
                type: MESSAGE_ADDED,
                payload: {
                    messageClass: 'message--initial',
                    sender: 'bot',
                    text: `Heck yeah! You achieved your weekly goal 🔥🔥🔥`,
                    delay: 1000,
                    showLoader: true,
                    uuid: uuid()
                }
            });
            setTimeout(() => {
                setExplode1(false);
                setExplode2(false);
            }, 500)
        }
    }, [appState.eventEmitted])

    const config = {
        angle: 70,
        spread: 60,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 1050,
        stagger: 3,
        width: "10px",
        height: "10px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      };

    return (
        <div className="confetti-container">
            <Confetti active={explode1} config={config} />
            <Confetti active={explode2} config={{ ...config, angle: 100 }} />
        </div>
    )
}

export default GoalAchievementParty;