import React from 'react';
import './buttons.css'

const Buttons = () => {
    return (
        <div className={'buttons'}>
            <button className={'btn'}>All</button>
            <button className={'btn'}>Important</button>
            <button className={'btn'}>Done</button>
        </div>
    );
};

export default Buttons;