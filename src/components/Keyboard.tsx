import React from 'react';
import { useDispatch } from 'react-redux';
import { addDigit, removeDigit, checkPin, reset } from '../features/Keyboard/KeyboardSlice';

const Keyboard: React.FC = () => {
    const dispatch = useDispatch();

    const handleDigitClick = (digit: string) => {
        dispatch(addDigit(digit));
    };

    const handleBackspaceClick = () => {
        dispatch(removeDigit());
    };

    const handleEnterClick = () => {
        dispatch(checkPin());
        setTimeout(() => dispatch(reset()), 2000);
    };

    return (
        <div className="keyboard">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
                <button key={digit} onClick={() => handleDigitClick(digit.toString())}>
                    {digit}
                </button>
            ))}
            <button onClick={handleBackspaceClick}>{'<'}</button>
            <button onClick={handleEnterClick}>{'E'}</button>
        </div>
    );
};

export default Keyboard;
