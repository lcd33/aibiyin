import styled from "styled-components";

const EntirePagenamtionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  margin-top: 20px;
  .entire-pagenamtion{
    .MuiPaginationItem-icon {
      font-size: 20px;
    }
    .MuiPaginationItem-page{
      margin: 0 9px;

      &:hover {
        text-decoration: underline;
      }
    }
    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;

      &:hover {
        background-color: #222;
      }
    }
  }
  .text{
    margin-top: 20px;
  }

`
export default EntirePagenamtionWrapper