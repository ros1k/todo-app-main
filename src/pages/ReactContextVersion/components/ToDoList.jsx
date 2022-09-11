import { useContext } from 'react'
import {TodoList, Filters,Counter,FiltersWrapper,ClearButton} from './styledToDoList'
import { AppContext } from '../context/context'
import FilterButton from './FilterButton'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const {tasks,FilterTypes,activeFilter,ClearCompleted,theme} = useContext(AppContext)
  
  const generateList = () => {
    switch (activeFilter) {
      case 'all':
        return tasks.map((item,index) => {
          return <ToDoItem key={index} task={item.task} isCompleted={item.isCompleted}/>
        })
      case 'active':
        return tasks.map((item,index) => {
          return !item.isCompleted ? <ToDoItem key={index} task={item.task} isCompleted={item.isCompleted}/> : null;
        })

      case 'completed':
        return tasks.map((item,index) => {
          return item.isCompleted ? <ToDoItem key={index} task={item.task} isCompleted={item.isCompleted}/> : null;
        })

        default:
          console.log('something went wrong')
    }
  }
  
  return (
    <TodoList theme={theme}>
      {// rendering todo list 
        generateList()
      } 
      <Filters >
      <Counter className="counter">{ tasks.filter(task => task.isCompleted === false ).length + ' items left' }</Counter>
              <FiltersWrapper >
                  {//rendering filter buttons
                    FilterTypes.map((e,i )=> { return <FilterButton key={i} type={e}/> })
                  }
              </FiltersWrapper>
              <ClearButton  onClick={ClearCompleted}>Clear Completed</ClearButton>
      </Filters>
    </TodoList>
  )
}

export default ToDoList

