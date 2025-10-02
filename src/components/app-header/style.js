import styled from 'styled-components'
export const AppWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isFixed',
})` 
  .ahd-content-wrapper{
    position: ${props => props.isFixed ? 'fixed' : 'static'};
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s ease-in-out;
    border-bottom-color: ${props => props.theme.topAlfp ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'};
    background: ${props => props.theme.topAlfp ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'};
    .ahd-content{
      display: flex;
      align-items: center;
      height: 80px;
    }

  }
  .cover{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 888;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
`