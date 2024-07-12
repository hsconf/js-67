import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const CORRECT_PIN = '1337';

export interface KeyboardState {
    input: string;
    status: 'idle' | 'granted' | 'denied';
}

const initialState: KeyboardState = {
    input: '',
    status: 'idle',
};

export const keyboardSlice = createSlice({
    name: 'keyboard',
    initialState,
    reducers: {
        addDigit: (state, action: PayloadAction<string>) => {
            if (state.input.length < 4) {
                state.input += action.payload;
            }
        },
        removeDigit: (state) => {
            state.input = state.input.slice(0, -1);
        },
        checkPin: (state) => {
            if (state.input === CORRECT_PIN) {
                state.status = 'granted';
            } else {
                state.status = 'denied';
            }
        },
        reset: (state) => {
            state.input = '';
            state.status = 'idle';
        },
    },
});

export const { addDigit, removeDigit, checkPin, reset } = keyboardSlice.actions;

export default keyboardSlice.reducer;
