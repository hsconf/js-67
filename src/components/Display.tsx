import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Display: React.FC = () => {
    const input = useSelector((state: RootState) => state.keyboard.input);
    const status = useSelector((state: RootState) => state.keyboard.status);

    let displayClass = '';
    let message = '';

    if (status === 'granted') {
        displayClass = 'green';
        message = 'Access Granted';
    } else if (status === 'denied') {
        displayClass = 'red';
        message = 'Access Denied';
    }

    return (
        <div className={`display ${displayClass}`}>
            <div className="input">{'*'.repeat(input.length)}</div>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default Display;
