import { useContext } from "react"
import styled from "styled-components"
import { AppContext } from "../context/context"


 const AppWrapper = ({children}) => {
  const {themeScheme} = useContext(AppContext)
   return (
        <Wrapper>
            <BgWrapper>
              <Background src={themeScheme.image}/>
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
  width: 100%;
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