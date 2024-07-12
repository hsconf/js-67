import React from 'react';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Display />
            <Keyboard />
        </div>
    );
};

export default App;
