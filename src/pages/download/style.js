import styled from 'styled-components'

export const DownLoadWrapper=styled.div`
    
    
`
export const Row=styled.div`
    background-image: linear-gradient(0deg,hsla(0,0%,59%,.15),hsla(0,0%,59%,0));
    .center{
        width:960px;
        margin:50px auto;
    }
`
export const Title=styled.div`
    position:relative;
    width:960px;
    text-align:center;
    display:flex;
    justify-content:center;
    img{
        width:100px;
        height:100px;
    }
    .text{
        margin:19px 0 19px 20px;
    }
    h3{
        font-size:30px;
        color:#333;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    p{
        font-size:24px;
        font-weight:300;
        color:#333;
    }
`
export const Down=styled.div`
    display:flex;
    justify-content:center;
    margin-top:40px;
    .load{
        margin-left:40px;
        margin-top:66px;
        h3{
            font-size:24px;
            margin-top:10px;
            color:#333;
        }
        p{
            font-size:16px;
            font-weight:300;
            margin-top:10px;
            color:#333;
        }
    }
    .img1{
        width:410px;
        height:314px;
    }
    .img2{
        width:140px;
        height:140px;
    }
`
export const PhotoWord=styled.div`
    margin:0 auto;
    display:flex;
    position:relative;
    width:930px;
    height:377px;
    img{
        position:absolute;
        right:0;
        bottom:0;
        width:930px;
        height:377px;
    }
    div{
        width:480px;
        margin-left:80px;
        margin-top:25px;
        height:100px;
        box-sizing:border-box;
        h3{
            font-size:28px;
            font-weight:400;
            margin-bottom:20px;
            color:#333;
        }
        p{
            font-size:18px;
            font-weight:300;
            color:#333;
            line-height:30px;
        }
    }
`