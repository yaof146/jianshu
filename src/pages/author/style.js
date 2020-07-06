import styled from 'styled-components'

export const AuthorWrapper=styled.div`
    width:960px;
    margin:0 auto;
`
export const Main=styled.div`
    width:66.67%;
    margin-top:20px;
`
export const Recommend=styled.div`
    width:29.17%;
    background:pink;
`
export const Message=styled.div`
    display:flex;
    justify-content:space-around;
    img{
        width:80px;
        height:80px;
        border:1px solid #ddd;
        border-radius:50%;
    }
`
export const Name=styled.div`
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
`
export const AuthorList=styled.ul`
    display:flex;
`
export const AuthorItem=styled.li`
    box-sizing:border-box;
    padding:0 10px;
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