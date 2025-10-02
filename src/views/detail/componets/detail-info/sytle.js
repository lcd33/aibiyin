import styled from "styled-components";

const DetailInfoWrapper = styled.div`
  height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 三列：100px, 200px, 剩余空间 */
  position: relative;
  .detail-info-item{
    position: relative;
    border: 1px solid #000;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
      
    }
    .detail-info-item-cover{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0,0,0,.25);
      transition: all 0.3s ease-in-out;
    }
    &:hover{
      img{
        transform: scale(1.1);
      }
      .detail-info-item-cover{
        background-color: transparent;
      }
    }
    &:first-child{
      grid-row: 1 / 3;
      grid-column: 1 / 3;
    }
  }
  .check-all{
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 8px 15px;
    background-color: #fff;
    color: #000;
    border-radius: 6px;
    cursor: pointer;
  }
`
export default DetailInfoWrapper