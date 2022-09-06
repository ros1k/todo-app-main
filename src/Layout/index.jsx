
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className="layout--wrapper">

    
        <header>
            <h1> To Do List </h1>
            <svg></svg>
        </header>
        
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="useStateVersion">useState Version</Link>
            </li>
            <li>
            <Link to="reactContexVersion">React Context Version</Link>
            </li>
            <li>
            <Link to="reduxVersion">Redux Version</Link>
            </li>
        </ul>
        {children}
      </div>
  
  )
}

export default Layout