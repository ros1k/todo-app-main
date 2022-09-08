import { useState } from 'react'
 import SingleTask from '../../components/SingleTask'
import './useStateVersion.css'
import check from '../../images/icon-check.svg'
import cross from '../../images/icon-cross.svg'
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

  const [filter,setFilter] = useState('all')
  const [TaskList, setTaskList] = useState(exampleTaskList)
  const [showCurrentTasksList,setCurrentTasksList] = useState([]);
  const taskInput = useRef(null);
  const filtersRef = useRef([]);

  const AddNewTask = () => {
    const newTask = { task: taskInput.current.value,isCompleted: false }
    setTaskList([newTask,...TaskList ])
  }

  const DeleteTask = (taskToDelete) => {
    setTaskList(TaskList.filter(item => item.task !== taskToDelete));
  }

  const handleToggleTask = (updateTask) =>{
    const updateList = TaskList.map((element,i)=>{
      if(updateTask === element.task){
        element.isCompleted = !element.isCompleted;
      }
      return element
    })
    
    setTaskList(updateList)
  }
  const handleClickFilter = (event) =>{
    filtersRef.current.map((el) => {
      if(el.dataset['filter'] === event.target.dataset['filter']){
        el.classList.add('active')
      }else{
        el.classList.remove('active')
      }
      return null;
    })
    setFilter(event.target.dataset['filter'])
  }
  const generateList = () =>{
    const CurrentTasksList = TaskList.map((e,i) =>{
      if (filter === 'active' && !e.isCompleted){
          return <SingleTask 
                key={i} 
                task={e.task} 
                isCompleted={e.isCompleted} 
                deleteTask={DeleteTask}
                handleClickTask={handleToggleTask} />
              }
      if (filter === 'completed' && e.isCompleted) {
          return <SingleTask 
                key={i} 
                task={e.task} 
                isCompleted={e.isCompleted} 
                deleteTask={DeleteTask}
                handleClickTask={handleToggleTask} />
          }
      if (filter === 'all' ) {  
        return <SingleTask 
          key={i} 
          task={e.task} 
          isCompleted={e.isCompleted} 
          deleteTask={DeleteTask}
          handleClickTask={handleToggleTask} />
          }
      
    })
    setCurrentTasksList(CurrentTasksList)
  }
  const countActiveTasks = TaskList.filter(task => task.isCompleted == false ).length;
  useEffect(()=>{
    generateList()
    

  },[TaskList,filter])
  
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
            <span className="counter">{countActiveTasks + ' items left'}</span>
            <div className="filters">
              <button 
                className="filter-button active" 
                data-filter='all' 
                onClick={(e) =>handleClickFilter(e)}
                ref={(el) => (filtersRef.current[0] = el)}
                >All</button>
              <button 
                className="filter-button" 
                data-filter='active'
                onClick={(e) =>handleClickFilter(e)}
                ref={(el) => (filtersRef.current[1] = el)}
                >Active</button>
              <button 
                className="filter-button" 
                data-filter='completed' 
                onClick={(e) =>handleClickFilter(e)}
                ref={(el) => (filtersRef.current[2] = el)}
                >Completed</button>
            </div>
            <button className="clear">Clear Completed</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UseStateVersion