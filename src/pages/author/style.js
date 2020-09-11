import styled from 'styled-components'

export const AuthorWrapper=styled.div`
    width:960px;
    margin:0 auto;
    display:flex;
`
export const Main=styled.div`
    width:66.67%;
    margin-top:20px;
`
export const Recommend=styled.div`
    width:29.17%;
    background:pink;
    margin-left:20px;
`
export const Message=styled.div`
    display:flex;
    justify-content:space-around;
    margin-bottom:20px;
    img{
        width:80px;
        height:80px;
        border:1px solid #ddd;
        border-radius:50%;
    }
`
export const Name=styled.div`
    margin-left:25px;
    width:50%;
    h3{
        font-size:21px;
        font-weight:700;
    }
    .fans{
        margin-top:20px;
    }
        li:first-child{
            padding-left:0;
        }
        li:nth-child(5){
            padding-left:0;
        }
`
export const AuthorList=styled.ul`
    display:flex;
    flex-wrap:wrap;
`
export const AuthorItem=styled.li`
    min-width:66px;
    box-sizing:border-box;
    padding:5px 10px;
    border-right:1px solid #ccc;
    span{
        font-size:15px;
        color:#333;
    }
    div{
        font-size:12px;
        color:#969696;
    }
`
export const Focus=styled.div`
    
    .send{
        width:90px;
        background:#fff;
        border:1px solid #42c02e;
        border-radius:40px;
        font-size:15px;
        font-weight:400;
        box-sizing:border-box;
        padding:8px 0;
        margin:23px 0 23px 16px;
        color:#42c02e;
    }
    .focus{
        width:90px;
        box-sizing:border-box;
        padding:9px 0;
        margin:23px 0 23px 16px;
        border-radius:40px;
        background:#42c02e;
        color:#fff;
        font-size:15px;
        font-weight:400;
        border:0;
    }
`
export const Article=styled.div`

`
export const Menu=styled.div`
    ul{
        display:flex;
        width:70%;
        border-bottom:1px solid #f0f0f0;
        li{
            width:25%;
            text-align:center;
            display:inline-block;
            padding:8px 0;
            color:#969696;
            line-height:25px;
            font-size:15px;
            font-weight:700;
        }
    }
`
export const ArticleList=styled.div`

`
export const ArticleItem=styled.li`
    box-sizing:border-box;
    padding:15px 0 20px 0;
    margin:0 0 15px;
    display:flex;
`
export const Echart = styled.div`

`
export const Guanggao = styled.div`
    div{
        width:100%;
        img{
            width:100%;
            height:100px;
        }
    }
`
export const OtherArticle = styled.div`
    width:100%;
    height:300px;
    background:yellow;
`