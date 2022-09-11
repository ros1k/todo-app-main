import styled from "styled-components"
export const FakeCheckbox = styled.span`
 display: flex;
    margin: 0 25px 0 10px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    background: rgb(0,141,215);
    background: linear-gradient(120deg, rgba(0,141,215,1) 0%, rgba(197,10,252,1) 100%);
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    &:after{
      position: absolute;
      content:"";
      width: 26px;
      height: 26px;
      top: 1px;
      left: 1px;
      border-radius: 50%;
      z-index: 2;
      transition: all 0.2s ease;
      background:${props => props.theme === 'dark' ? '#25273C' : '#FFFFFF'};
      opacity: 1;
    }
    &::before{
      position: absolute;
      content:"";
      height: 28px;
      width: 28px;
      top:0;
      left:0;
      opacity:1;
      transition: all 0.2s ease;
      border-radius: 50%;
      background-color: dimgray;
      z-index: 1;
    }
`
export const HiddenButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;
    border:none;
    justify-content: flex-start;
    cursor: pointer;
`
export const FakeCheckboxImg = styled.img`
    opacity:0;
    transition: all 0.2s ease;
`
export const Task = styled.p`
    font-size:17px;
    color: ${props => props.theme === 'dark' ? '#EBE1F6' : 'black'};
    transition: all 0.2s ease;
`
export const DeleteButton = styled.button`
    display: flex;
    background-color: transparent;
    border:none;
    overflow: hidden;
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    
`
export const DeleteButtonImg = styled.img`
  position: absolute;
  top: 11px;
  right:-100%;
  transition: all 0.2s ease;
`
export const ListItem = styled.li`
    background-color: ${props => props.theme === 'dark' ? '#25273C' : '#FFFFFF'};
    border-bottom:1px solid dimgray;
    list-style-type: none;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover ${FakeCheckbox}::before{
      opacity:0;
    }
    &:hover ${Task} {
      color: ${props => props.theme === 'dark' ? '#b9b9b9' : '#000000'} ;
    }
    &:hover ${DeleteButtonImg}{
      right:9px;
    }
    &.completed ${FakeCheckbox}::after{
      opacity:0;
    }
    &.completed ${FakeCheckbox}::before{
      opacity:0;
    }
    &.completed ${FakeCheckboxImg}{
      opacity:1;
    }
    &.completed ${Task}{
      text-decoration: line-through;
      color:darkgrey;
    }
`