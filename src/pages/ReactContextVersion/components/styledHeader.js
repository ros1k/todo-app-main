import styled from 'styled-components'


export const TopWrapper = styled.header`
  
`
export const HeaderContent = styled.div``
export const Title = styled.h1``
export const ThemeButton = styled.button``
export const ThemeIcon = styled.img``
export const CheckboxButton = styled.button`
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
    border:none;
    cursor: pointer;
 
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
      background:#25273C;
    }
    &:before{
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

export const InputWrapper = styled.div`
    width: 100%;
    padding:15px 10px;
    position: relative;
    border-radius: 5px;
    background-color: #25273C;
    display: flex;
    &:hover ${CheckboxButton}{
      &:before{
        opacity:0;
      }
    }
`
export const ButtonImage = styled.img`
    z-index: 10;
    opacity:0;
    transition: all 0.2s ease;
    &::hover img{
        opacity:1;
    }
`
export const Input = styled.input.attrs({
    onChange: null,
    type: 'text',
    placeholder: 'Create a new todo ...'
})`
  
    background-color: transparent;
    border:none;
    color:#EBE1F6;
    min-height: 25px;
    font-size:22px;
    &:active,&:focus,&:focus-visible{
      border:none;
      outline:none;
    }
`
