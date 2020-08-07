import styled from 'styled-components'

export const ConcernWrapper=styled.div`
    width: 70%;
    margin: 20px auto;
    display:flex;
`
export const AllConcern=styled.div`
    width:280px;
    div.addConcern{
        display:flex;
        background:#f0f0f0;
        color:#333;
        height:60px;
        box-sizing:border-box;
        padding:10px 13px;
        font-size:17px;
        div{
            width:40px;
            height:40px;
            border-radius:10%;
            img{
                width:40px;
                height:40px;
                margin-right:10px;
                border-radius:10%;
            }
        }
        span{
            margin:11px 10px;
        }
    }
    h2{
        color:#2f2f2f;
        padding:10px;
    }
    ul{
        color:#333;
        font-size:17px;
        li{
            height:60px;
            box-sizing:border-box;
            padding:10px 13px;
            display:flex;
            justify-content:space-between;
            div{
                display:flex;
                justify-content:space-between;
                span{
                    margin:11px 10px;
                }
            }
            img{
                width:40px;
                height:40px;
                border-radius:10%;
            }
            span{
                margin:11px 10px;
            }
        }
        
    }
    
`
export const RecommendMenu=styled.div`
    border-left:1px solid #f0f0f0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 30px;
`
export const SelectMenu=styled.ul`
    width:100%;
    display:flex;
    font-size: 15px;
    color: #969696;
    li{
        margin:10px;
    }
`
export const MenuItem=styled.ul`
    li{
        border-top:1px solid #f0f0f0;
        display:flex;
        justify-content:space-between;
        padding:20px 0;
        div{
            h3{
                font-size:12px;
                margin-bottom:13px;
                color:#ec6e56;
            }
            .introduce{
                display:flex;
                img{
                    width:52px;
                    height:52px;
                    border:1px solid #ddd;
                    border-radius:10%;
                }
                div.word{
                    margin-left:20px;
                    h2{
                        font-size:15px;
                        font-weight:700;
                        margin: 0 0 10px;
                        color:#333;
                    }
                    p{
                        font-size:12px;
                        color:#969696;
                        margin:0 0 5px;
                    }
                    div{
                        font-size:12px;
                        color:#969696;
                        margin: 10px 0;
                        i{
                            font-size:13px;
                            margin-right:2px;
                            color:#999;
                        }
                        span{
                            margin-right:10px;
                        }
                    }
                }
            }
        }
        .isConcern{
            div{
                font-size:16px;
                font-weight:400;
                width:100px;
                background:#42c02e;
                box-sizing:border-box;
                padding:8px 0;
                margin-top:5px;
                border-radius:17px;
                color:#fff;
                text-align:center;
            }
            
        }
    }
`