import styled from 'styled-components'

const AppFooterWrapper = styled.div`
  border-top: 1px solid #e5e5e5;
  margin-top: 100px;
  .layout {
    width: 1032px;
    margin: 0 auto;
    width: 1032px;
    .content {
      display: flex;
      padding: 48px 24px;
      border-bottom: 1px solid #e5e5e5;
      .item{
        width:250px;
        .title {
          font-weight: bold;
          margin-bottom: 16px;
          color: #333;
        }
        .title-contener {
          .item {
            display:block ;
            margin-top: 5px;
            color:#767676;
            cursor: pointer;
            &:hover {
              text-decoration:underline;
            }
          }
        }
      }
    }
    .copyright {
      padding: 30px 0 60px;
      text-align: center;
      color: #767676;
    }
  }
`
export default AppFooterWrapper
