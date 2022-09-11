import { useEffect } from "react"
import { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../context/context"

const FilterButton = ({type}) => {
  const {activeFilter,ToggleFilter} = useContext(AppContext)

  return (
    <Filter data-filter={type} 
    className={activeFilter === type ? 'active' : ""}
     onClick={(e) =>ToggleFilter(type)}
    // ref={(el) => (filtersRef.current[0] = el)}
    >{type}
    </Filter>
  
  )
}

export default FilterButton

const Filter = styled.button`
    border: none;
    margin-right: 10px;
    cursor: pointer;
    background-color: transparent;
    color:#999999;
    font-weight:bold;
    &.active{
    color:#4A78D1;
    }
  `