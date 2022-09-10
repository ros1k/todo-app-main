import { useContext } from "react"
import {TopWrapper,HeaderContent,Title,ThemeButton,ThemeIcon,InputWrapper,CheckboxButton,ButtonImage,Input}
from './styledHeader'
import check from '../../../images/icon-check.svg'
import darkIcon from '../../../images/icon-moon.svg'
import sunIcon from '../../../images/icon-sun.svg'
import { AppContext } from "../context/context"

const Header = () => {
  const {theme} = useContext(AppContext)

  return (
    <TopWrapper>
      <HeaderContent>
        <Title>TODO</Title>
        <ThemeButton>
          <ThemeIcon src={theme === "dark" ? sunIcon : darkIcon}/>
        </ThemeButton>
      </HeaderContent>
 
      <InputWrapper>
        <CheckboxButton>
          <ButtonImage src={check} alt="checkbox"/>
        </CheckboxButton>
        <Input/>
      </InputWrapper>
      {/* <div className='input__wrapper'>
      //     <button className="fake__checkbox" >
      //       <img src={check} alt="" />
      //     </button>
          
      //     <input type="text" placeholder='Create a new todo...'/>
      //   </div> */}
    </TopWrapper>
  )
}

export default Header


