import React from 'react'
import AppProvider from './context/context'

import AppWrapper from './components/AppWrapper'
import Header from './components/Header'

import ToDoList from './components/ToDoList'

const ReactContextVersion = () => {
  return (
    <AppProvider>
        <AppWrapper>
          <Header/>
          <ToDoList/>
        </AppWrapper>  
    </AppProvider>
        
      // <div>
      //   <div className='input__wrapper'>
      //     <button className="fake__checkbox" >
      //       <img src={check} alt="" />
      //     </button>
          
      //     <input type="text" placeholder='Create a new todo...'/>
      //   </div>
      //   <div className="tasks__list__wrapper">
      //     <ul className="tasks__list">
      //       {}
      //       <li className="task__list--options">
      //         <span className="counter"> items left</span>
      //         <div className="filters">
      //           <button 
      //             className="filter-button active" 
      //             data-filter='all' 

      //             >All</button>
      //           <button 
      //             className="filter-button" 
      //             data-filter='active'
                
      //             >Active</button>
      //           <button 
      //             className="filter-button" 
      //             data-filter='completed' 
              
      //             >Completed</button>
      //         </div>
      //         <button className="clear">Clear Completed</button>
      //       </li>
      //     </ul>
      //   </div>
      // </div>
  )
}

export default ReactContextVersion