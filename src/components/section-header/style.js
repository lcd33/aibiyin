import styled from 'styled-components'

const SectionHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  .left {
    /* 防止margin折叠 */
    overflow: hidden
    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      color: #333;
    }
    .subtitle {
      font-size: 16px;
      margin-bottom: 20px;
      color: #222;
    }
  }
  .right {
    margin-left: 20px;
    display: none;
    color: #222;
  }

  &:hover {
    .right {
      display: block;
    }
  }
  
`

export default SectionHeaderWrapper