
import { Link } from 'react-router-dom'
import './layout.css'

import Moon from '../images/icon-moon.svg'
import Sun from '../images/icon-sun.svg'
import DarkBg from '../images/bg-desktop-dark.jpg'
import LightBg from '../images/bg-desktop-light.jpg'

const Layout = ({children,changeTheme,currentTheme}) => {
 
 
  return (
    <div className={'layout--wrapper ' + currentTheme}>
        <div className="layout__bg" style={{backgroundImage:`Url(${currentTheme ==='dark'? DarkBg : LightBg})`}}></div>
        <div className="layout__container">
          <header className='to-do__header'>
              <h1> To Do List </h1>
              <button 
                className='theme__button'
                onClick={(changeTheme)}
                >
                <img src={currentTheme === 'dark' ? Moon : Sun} alt="" />
              </button>
          </header>
          {/* <ul>
              <li>
              <Link to="/">useState Version</Link>
              </li>
              <li>
              <Link to="reactContexVersion">React Context Version</Link>
              </li>
              <li>
              <Link to="reduxVersion">Redux Version</Link>
              </li>
          </ul> */}
          {children}
      </div>
    </div>
  
  )
}

export default Layout