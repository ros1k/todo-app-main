import { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../context/context"
import LightBG from '../../../images/bg-desktop-light.jpg'
import DarkBG from '../../../images/bg-desktop-dark.jpg'

 const AppWrapper = ({children}) => {
  const {theme} = useContext(AppContext)
   return (
        <Wrapper>
            <BgWrapper>
              <Background src={theme ==='dark' ? DarkBG : LightBG}/>
            </BgWrapper>
            <Container>
              {children}
            </Container>
        </Wrapper>
   )
 }
 
 export default AppWrapper

 const Wrapper = styled.div`
    position: relative;
    
 `
 const BgWrapper = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100vw;
  overflow-x: hidden;
  height: 400px;
  z-index: -1;
 `
 const Background = styled.img`
 `
 const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 100px;
    padding-top:100px;
 `