import styled from "styled-components";

const DetailSwipperWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  .swipper-header{
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 40px ;
    justify-content: flex-end;
  }
  .swipper-content{
    flex: 1;
    width: 70%;
    margin: 0 auto;
    overflow: hidden;
    .datail-images{
      height: 100%;
      width: 100%;
      display: flex;

      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .control1{
      .pic-left{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5%;
        z-index: 100;
      }
      .pic-right{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5%;
        z-index: 100;
      }
    }
  }
  .swipper-footer{
    width: 70%;
    margin:0 auto 10px;
    overflow: hidden;
    .swipper-footer-content{
      transition: all 0.3s ease-in-out;
    }
    .swipper-footer-info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px 0 5px;
      color: #fff;
      .swipper-footer-info-hide{
        cursor: pointer;
      }
    }

    .datail-images{
      position: relative;
      cursor: pointer;
      height: 80px;
      margin: 0 5px;
      img{
        height: 100%;
        object-fit: cover;
      }
      .swipper-footer-cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .4);
      }
      &-active{
        .swipper-footer-cover{
           background-color: transparent;
        }
      }
    }
  }
`
export default DetailSwipperWrapper