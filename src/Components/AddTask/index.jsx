import React from 'react';
import './addTask.css'

const AddTask = () => {
    return (
        <div className={'add-task'}>
            <input type="text" placeholder='Add new' className={'input-add-task'} />
            <button className={'btn-add-task'} >Add</button>
        </div>
    );
};

export default AddTask;