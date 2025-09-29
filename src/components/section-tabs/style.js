import styled from 'styled-components'

const SectionTabsWrapper = styled.div`

  .item{
    font-size: 17px;
    flex-shrink: 0;
    flex-basis: 120px;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 4px;
    text-align: center;
    white-space: nowrap;
    border: 0.5px solid #D8D8D8;
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    &.active{
      background-color: ${(props) => props.theme.color.secondary};
      color: #fff;
    }
  }
`

export default SectionTabsWrapper
