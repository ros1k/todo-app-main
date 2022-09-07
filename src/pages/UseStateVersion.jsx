import { useState } from 'react'
 import SingleTask from '../components/SingleTask'
import './useStateVersion.css'
import check from '../images/icon-check.svg'
import cross from '../images/icon-cross.svg'
import { useRef } from 'react'
import { useEffect } from 'react'


const exampleTaskList = [
  { task: "Get a ReactJS job", isCompleted: true },
  { task: "Jog around the park 3x", isCompleted: false },
  { task: "10 minutes meditation", isCompleted: false },
  { task: "Read for 1 hour", isCompleted: false },
  { task: "Pick up groceries", isCompleted: false },
  { task: "Complete Todo App", isCompleted: false },
]


const UseStateVersion = () => {


  const [TaskList, setTaskList] = useState(exampleTaskList)
  const [showCurrentTasksList,setCurrentTasksList] = useState([]);
  const taskInput = useRef(null);
  
  const AddNewTask = () => {
    const newTask = { task: taskInput.current.value,isCompleted: false }
    setTaskList([newTask,...TaskList ])
  }

  const handleClickTask = (updateTask) =>{
    console.log(updateTask)
    const updateList = TaskList.map((element,i)=>{
      if(updateTask === element.task){
        element.isCompleted = !element.isCompleted;
      }
      return element
    })
    
    setTaskList(updateList)
  }
  
  const generateList = () =>{
    const showCurrentTasksList = TaskList.map((e,i) =>{
      return <SingleTask 
                key={i} 
                task={e.task} 
                isCompleted={e.isCompleted} 
                handleClickTask={handleClickTask} />
    })
    setCurrentTasksList(showCurrentTasksList)
  }
  
  useEffect(()=>{
    generateList()
  },[TaskList])
  
  return (
    <div>
      <div className='input__wrapper'>
        <button className="fake__checkbox">
          <img src={check} alt="" />
        </button>
        
        <input ref={taskInput}
           onKeyPress={event => {
            if (event.key === 'Enter') {
              AddNewTask();
            }
          }}
          type="text" placeholder='Create a new todo...'/>
      </div>
      <div className="tasks__list__wrapper">
        <ul className="tasks__list">
          {showCurrentTasksList}
          <li className="task__list--options">
            <span className="counter"></span>
            <div className="filter">
              <button className="show-all">All</button>
              <button className="show-active">Active</button>
              <button className="show-completed">Completed</button>
            </div>
            <button className="clear">Clear Completed</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UseStateVersion