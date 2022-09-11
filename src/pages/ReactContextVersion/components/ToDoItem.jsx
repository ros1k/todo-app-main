import { useContext } from 'react'
import { ListItem,HiddenButton, FakeCheckbox,FakeCheckboxImg, Task, DeleteButton,DeleteButtonImg } from './styledToDoItem'
import check from '../../../images/icon-check.svg'
import cross from '../../../images/icon-cross.svg'
import { AppContext } from '../context/context'

const ToDoItem = ({task,isCompleted}) => {
  const {ToggleCompleted,DeleteTask,theme} = useContext(AppContext)
  
  return (
    <ListItem theme={theme} className={ isCompleted ? "completed" : ""} >
      <HiddenButton  onClick={(e) => { ToggleCompleted(task) }} >
          <FakeCheckbox theme={theme}> 
              <FakeCheckboxImg  src={check} alt="" />
          </FakeCheckbox> 
          <Task theme={theme}>{ task }</Task>
      </HiddenButton>
      <DeleteButton  onClick={() => {DeleteTask(task)}}>
        <DeleteButtonImg src={cross} alt=""  />
      </DeleteButton>
    </ListItem>
  )
}

export default ToDoItem