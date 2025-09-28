import styled from 'styled-components'
export const RoomItemWrapper = styled.li`
  width:25%;
  padding: 8px;
  box-sizing: border-box;
  .inner{
    width:100% ;
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
    }

  }
  .dec{
    margin: 10px 0 5px;
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
