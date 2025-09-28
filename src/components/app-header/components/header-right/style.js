import styled from "styled-components";


export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
  .btns {
    display: flex;
    align-items: center;
    span {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 21px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    background-color: #fff;
    border-radius: 21px;
    border: 1px solid #ccc;
    cursor: pointer;
    /* 混入 */
    ${props => props.theme.mixin.boxShadow};
  }

  .pannel {
    position: absolute;
    top: 50px;
    right: 0;
    width: 240px;
    background-color: #fff;
    color:#666;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .top{
      padding:10px 0 ;
      border-bottom: 1px solid #f0f0f0;
    }
    .bottom{
      padding:10px 0 ;
    }
    .item {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      box-sizing: border-box;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`
