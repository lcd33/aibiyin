import styled from 'styled-components'

const SearchBar = styled.div`
  width: 80%;
  margin:10px auto;
  height: 70px;
  background: ${props => props.theme.topAlfp ? '#fff' : '#fff'};
  border-radius: 40px;
  display: flex;
  border: 1px solid #ccc;
  .search-content{
    flex: 1;
    display: flex;
    align-items: center;

    .search-item1{
      flex: 1;
      padding: 0 40px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      border-right: 2px solid #ccc;
      &:last-child{
        border-right: none;
      }
      .text{
        font-size: 12px;
        font-weight: bold;
        color: #000;
      }
      .sub-text{
        margin-top: 10px;
        font-size: 13px;
        color: #686868;
      }
    }
  }
`
export default SearchBar