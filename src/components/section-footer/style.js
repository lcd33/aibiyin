import styled from "styled-components";

const SectionFooterWrapper = styled.div`
  .footer-info{
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin-top: 10px;
    color: ${props => props.color};
    &:hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 10px;
      font-size: 17px;
      font-weight: 700;
    }
    .icon {
      font-size: 13px;
    }
  }


`
export default SectionFooterWrapper
