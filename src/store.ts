import { configureStore } from '@reduxjs/toolkit';
import keyboardReducer, { KeyboardState } from './features/Keyboard/KeyboardSlice';

export const store = configureStore({
    reducer: {
        keyboard: keyboardReducer,
    },
});

export type RootState = {
    keyboard: KeyboardState;
};

export type AppDispatch = typeof store.dispatch;
