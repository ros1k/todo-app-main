import { useContext,useRef } from "react"
import {TopWrapper,HeaderContent,Title,ThemeButton,ThemeIcon,InputWrapper,CheckboxButton,ButtonImage,Input}
from './styledHeader'
import check from '../../../images/icon-check.svg'
import darkIcon from '../../../images/icon-moon.svg'
import sunIcon from '../../../images/icon-sun.svg'
import { AppContext } from "../context/context"

const Header = () => {
  const {theme,AddNewTask,changeTheme} = useContext(AppContext)
  const inputRef = useRef(null)

  const handleClick = () => {
    AddNewTask(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <TopWrapper>
      <HeaderContent>
        <Title>TODO</Title>
        <ThemeButton onClick={changeTheme}>
          <ThemeIcon src={theme === "dark" ? sunIcon : darkIcon}/>
        </ThemeButton>
      </HeaderContent>
 
      <InputWrapper theme={theme}>
        <CheckboxButton theme={theme} onClick={handleClick}>
          <ButtonImage src={check} alt="checkbox"/>
        </CheckboxButton>
        <Input ref={inputRef} onKeyPress={event => {
              if (event.key === 'Enter') {
                AddNewTask(event.target.value);
                event.target.value=""
              }
            }}/>
      </InputWrapper>
    </TopWrapper>
  )
}

export default Header


