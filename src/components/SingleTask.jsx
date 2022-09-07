
import './singleTask.css'
import cross from '../images/icon-cross.svg'
import check from '../images/icon-check.svg'



const SingleTask = ({task,isCompleted,handleClickTask}) => {
    

    return (
        <li className={`single-task ` + (isCompleted ? "completed" : "")}>
            <button className='task__wrapper' onClick={(e) => { handleClickTask(task) }}>
                <span className="fake__checkbox"> 
                    <img src={check} alt="" />
                </span> 
                <p className="task">{task}</p>
            </button>
            <button className="delete__task"><img src={cross} alt="" /></button>
        </li>
    )
}

export default SingleTask