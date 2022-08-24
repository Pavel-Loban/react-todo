import React from 'react'
import './tasks.css'

const Tasks = () => {
  return (
    <div className={'tasks'}>
      <div className={'task-item '}>
        <div className={'task-body'}>
          <p className={'title-task no-active'}>Task1</p>
          <div className={'about-task'}>
            <span className={'delet-task'}>delet</span>
            <span className={'info-task'}>info</span>
          </div>
        </div>
      </div>

      <div className={'task-item '}>
        <div className={'task-body'}>
          <p className={'title-task '}>Task2</p>
          <div className={'about-task'}>
            <span className={'delet-task'}>delet</span>
            <span className={'info-task'}>info</span>
          </div>
        </div>
      </div>

      <div className={'task-item '}>
        <div className={'task-body'}>
          <p className={'title-task '}>Task3</p>
          <div className={'about-task'}>
            <span className={'delet-task'}>delet</span>
            <span className={'info-task'}>info</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
