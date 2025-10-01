import styled from 'styled-components'
export const RoomItemWrapper = styled.li`
  width:${props => props.width};
  padding: 8px;
  box-sizing: border-box;
  flex-shrink: 0;
  .inner{
    width:100% ;
  }

  .slider{
    position: relative;
    cursor: pointer;
    
    .control{
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transform: translateY(-50%);
      z-index: 5;
      &:hover{
        .item{
          display: flex;
        }
      }
      .room-left{
        top: 50%;
        left: 0;
        background: linear-gradient(to left,transparent 0%,rgba(0,0,0,0.25) 100%);
      }
      .room-right{
        top: 50%;
        right: 0;
        background: linear-gradient(to right,transparent 0%,rgba(0,0,0,0.25) 100%);
      }

      .item{
        position: absolute;
        z-index: 10;
        display: none;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        width: 25%;
        height: 100%;
        color: #fff;
        border-radius: 3px 0 0 3px;
      }
    }
    .indicator{
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 10;

      width: 30%;
      .dot-item{
        display: flex;
        background-color: #fff;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin: 0 4px;
        &.active{
          background-color: #ff4d4f;
          width: 8px;
          height: 8px;
        }
        .dot{
          display: flex;
        }
      }
    }

  }
  .cover{
    position: relative;
    padding: 66.66% 0 0;
    border-radius: 3px;
    overflow: hidden;
    
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }
  .dec{
    margin: 10px 0 5px;
    font-size: 10px;
    font-weight: 700;
  }
  .name{
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
  .price{
    margin:8px 0 ;
  }
  .bottom{
    display: flex;
    align-items: center;

    .reviews_count{
      margin: 0 3px;
      font-size: 12px;
      font-weight: 700;
    }
    .bottom_info{
      font-size: 12px;
      font-weight: 700;
    }

    
    .MuiRating-icon{
      margin-right: -2px;
    }
  }
`
