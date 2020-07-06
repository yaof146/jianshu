import styled from 'styled-components'
export const DetailWrapper=styled.div`
    background:#f9f9f9;
    color:#404040
`
export const Good=styled.div`
    font-size:14px;
    color:#969696;
    position:fixed;
    top:216px;
    left:100px;
    text-align:center;
    div{
        width:48px;
        height:48px;
        line-height:48px;
        background:#fff;
        border-radius:50%;
        box-sizing:border-box;
        margin-bottom:10px;
    }
    span{
        display:inline-block;
        box-sizing:border-box;
        margin-bottom:20px;
    }
`
export const Content=styled.div`
    width:1000px;
    margin:0 auto;
    overflow:hidden;
    padding:16px;
    padding-bottom:100px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
`
export const Talk=styled.div`
    box-shadow: 0 -2px 10px rgba(0,0,0,.05);
    width:100%;
    position:fixed;
    bottom:0;
    background:#fff;
    .say{
        width:1000px;
        box-sizing:border-box;
        padding:10px 16px;
        margin:0 auto;
        display:flex;
        
        font-size:14px;
        color:#969696;
    }
    span{
        margin-right:30px;
        display:inline-block;
        margin-top:8px;
    }
    .inp2{
        height:56px;
        border-radius:0;
    }
    .show{
        display:block;
    }
    .hide{
        display:none;
    }
    .bottom{
        position:relative;
        bottom:-24px;
        border-radius:15px;
        border:1px solid #969696;
        padding:4px 12px;
        cursor:pointer;
    }
    .low{
        span:first-child{
            background:#ec7259;
            color:#fff;
            border:1px solid #ec7259;
        }
    }
`
export const Article=styled.div`
    width:730px;
    margin-right:10px;
    margin-bottom:24px;
    box-sizing: border-box;
    padding: 20px;
    color:#404040;
    background:#fff;
`
export const Title=styled.h1`
    font-size:30px;
    font-weight:700;
    margin-bottom: 20px;
`   
export const Text=styled.div`
    box-sizing:border-box;
    font-size:16px;
    font-weight:400;
    p{
        margin-bottom:20px;
        line-height: 30px;
    }
`
export const Author=styled.div`
    width:260px;
    img{
        width:100%;
    }
`
export const Message=styled.div`
    margin-bottom:30px;
    display:flex;
    img{
        width:48px;
        height:48px;
        border-radius:50%;
        margin-right:20px;
    }
    
`
export const Name=styled.div`

    .top{
        margin:10px 0;
        span:last-child{
            color:#ec7259;
            font-size:12px;
            box-sizing:border-box;
            padding:2px 9px;
            border-radius:15px;
            border:1px solid #ec7259;
        }
        span:first-child{
            font-size:16px;
            font-weight:500;
            margin-right:20px;
        }

    }
    .fans{
        i{
            color:#ec7259;
            font-size:13px;
        }
        span{
            font-size:13px;
            margin-right:10px;
            color:#969696;
        }
        span:first-child{
            color:#ec7259;
        }
    }
`
export const Input=styled.input`
    width:400px;
    box-sizing:border-box;
    background:#f2f2f2;
    margin-right:16px;
    padding:8px 18px;
    border-radius:18px;
    color:#969696;
    border:none;
    outline:medium;
`
export const OtherArticle=styled.div`
    margin-top:10px;
    background:#fff;
    font-size:14px;
    box-sizing: border-box;
    padding:16px;
    .top{
        span:first-child{
            color:#2d2d2d;
        }
    }
    .money{
        span{
            color:#969696;
        }
    }
`
export const Message2=styled.div`
    display:flex;
    padding-bottom:10px;
    border-bottom: 1px solid #ccc;
    img{
        width:48px;
        height:48px;
        border-radius:50%;
        margin-right:20px;
    }
    
`
export const Articles=styled.div`
    div{
        margin-top:16px;
    }
    
    h3{
        font-size:14px;
        color:#2d2d2d;
        margin-bottom:4px;
    }
    span{
        font-size:12px;
        color:#969696;
    }
`
export const Recommend=styled.div`
    h2{
        padding-left:6px;
        border-left:7px solid red;
        font-size:16px;
    }
    margin-top:10px;
    background:#fff;
    font-size:14px;
    box-sizing: border-box;
    padding:16px;
    .recom{
        div{
            margin-top:16px;
        }
        
        h3{
            font-size:14px;
            color:#2d2d2d;
            margin-bottom:4px;
            
        }
        span{
            font-size:12px;
            color:#969696;
        }
    }
`