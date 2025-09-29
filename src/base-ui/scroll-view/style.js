import styled from "styled-components";

const ScrollViewWrapper = styled.div`
  position: relative;
  padding: 10px 0;
  .left, .right{
    position: absolute;
    z-index: 100;
    background-color: #fff;
    width: 28px;
    height: 28px;
    ${props => props.theme.mixin.boxShadow}
    border-radius: 50%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icon{
      font-size: 16px;
    }
  }
  .left{
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
  .right{
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
  .scroll{
    position: relative;
    overflow: hidden;
    .scroll-content{
      display: flex;
      align-items: center;
      transition: all 0.3s ease-in-out;
    }
  }

`
export default ScrollViewWrapper
