import styled from "styled-components"

export const TodoList = styled.ul`
    list-style-type: none;
    padding:0;
    width: 100%;
    border-radius: 10px;
    margin-top: 50px;
    padding:0;
    box-shadow: 0px 10px 20px 1px rgb(35 35 35);
    color:white;
    display:flex;
    flex-direction: column;
    transition: all 0.2s ease ;
    li{
        transition: all 0.2s ease ;
    }
    & li:first-child{
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    & li:last-child{
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-color:transparent;
      background-color: ${props => props.theme === 'dark' ? '#25273C' : '#FFFFFF'};
      list-style-type: none;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:15px;
      
    }
`
export const Filters = styled.li`
  
`
export const Counter = styled.span`
    font-size:12px;
    font-weight: 600;
    color:darkgrey;
`
export const FiltersWrapper = styled.div``

export const ClearButton = styled.button`
   border: none;
    margin-right: 10px;
    cursor: pointer;
    background-color: transparent;
    color:#999999;
    font-weight:bold;
`