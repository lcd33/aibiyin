import styled from 'styled-components'

const HomeLongForWrapper = styled.div`
  margin-top: 30px;
  .longfor-content {
    margin: 0 -8px;
    .longfor-item {
      width: 20%;
      flex-shrink: 0;
      padding: 0 8px;
      box-sizing: border-box;
      
      .cover {
        width: 100%;
        position: relative;
        border-radius: 5px;  
        overflow:hidden ;
        img {
          width: 100%;
          object-fit: cover;
          
        }
        .onImg {
          position: absolute;
          height: 60%;
          width: 100%;
          bottom: 0;
          background: linear-gradient(-180deg,rgba(0,0,0,0) 3%,rgb(0,0,0) 100%)
        }
        .info {
          position: absolute;
          bottom: 15%;
          width: 100%;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          .city {
            font-size: 17px;
            font-weight: bold;
          }
          .price {
            margin-top: 5px;
          }
        }
      }

      
    }
  }
`

export default HomeLongForWrapper