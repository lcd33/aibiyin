import styled from 'styled-components'

const SectionHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  line-height: 1;
  .left {
    /* 防止margin折叠 */
    overflow: hidden;
    .title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
    .subtitle {
      font-size: 16px;
      margin-top: 16px;
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
      display: inline-block;
    }
  }
  
`

export default SectionHeaderWrapper