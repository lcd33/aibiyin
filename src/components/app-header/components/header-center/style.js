import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  .search-content-wrapper{
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;
    .seatch-bar{
      position: absolute;
      top: 57px;
      left: 50%;
      transform: translateX(-50%);
      width: 1000px;
      will-change: transform;
    }
  }

  .center-content{
    position: absolute;
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
  }
  
  .search-content{
    display: flex;
    align-items: center;
    justify-content: center;
    width:300px;
    color: ${props => props.theme.topAlfp ? '#fff' : '#222'};
    .search-item{
      font-size: 16px;
      font-weight: 600;
      margin: 0 20px;
      padding: 6px 0;
      weight:auto;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.3s ease-in-out;
      &-active{
        border-bottom: 2px solid red;
      }
    }
  }

  /* 动画效果 */
  .centerContent-enter{
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }
  .centerContent-enter-active{
    transition: all 300ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
  .centerContent-exit{
    opacity: 0;
  }


  .searchContent-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .searchContent-exit-active {
    transition: all 300ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .searchContent-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .searchContent-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 300ms ease;
  }

`
