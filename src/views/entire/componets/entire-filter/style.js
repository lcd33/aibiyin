import styled from "styled-components";

const EntireFilterWrapper = styled.div`
  margin-top: 80px;
  padding: 0 0 0 16px;
  height: 48px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  display: flex;
  align-items: center;
  .filter-container {
    display: flex;
    .filter-item {
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin: 0 4px 0 8px;
      cursor: pointer;
    }

    .filter-active{
      background-color: ${props => props.theme.color.secondary};
      color: #fff;
    }
  }
`
export default EntireFilterWrapper