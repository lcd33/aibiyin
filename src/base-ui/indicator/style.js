import styled from "styled-components";

const IndicatorWrapper = styled.div`
  overflow: hidden;
  .i-content {
    display: flex;
    align-items: center;
    position: relative;
    transition: transform 0.3s ease-in-out;
    & > *{
      flex-shrink: 0;
    }
  }
 
`
export default IndicatorWrapper