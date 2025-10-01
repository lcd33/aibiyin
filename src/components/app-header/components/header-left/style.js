import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  color:${props => props.theme.color.primary};
  margin-left: 24px;

  .logo {
    cursor: pointer;
    display: inline-block;
  }
`
