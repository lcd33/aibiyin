import styled from "styled-components";

export const CenterWrapper = styled.div`
  height: 48px;
  line-height: 48px;
  width: 300px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 24px;
  box-sizing: border-box;
  justify-content:  space-between;
  ${props => props.theme.mixin.boxShadow}
  .text {
    padding:0 16px ;
    color: #222;
    font-weight: 600;
  }
  .icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.theme.color.primary};
    color: #fff;
  }
`
