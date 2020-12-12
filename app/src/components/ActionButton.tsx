import React from 'react';
import * as types from '../types';

type ActionButtonProps = {
    action: types.Action;
}

const ActionButton = ({ action }: ActionButtonProps) => {
    const { label, callback } = action;

    return (
        <button className="action-button" onClick={() => callback()}>{ label }</button>
    )
};

export default ActionButton;