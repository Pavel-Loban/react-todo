import React from 'react';
import './infoTodo.css'

const InfoTodo = () => {
    return (
        <div className={'info-todo'}>
            <span className={'todo-not-done'}>2 </span>  more to do, <span className={'todo-done'}>1 </span> done
        </div>
    );
};

export default InfoTodo;