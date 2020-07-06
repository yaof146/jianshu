import styled from 'styled-components'
export const HomeWrapper=styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`
export const HomeLeft=styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`
export const HomeRight=styled.div`
    width:280px;
    float:right;
`
export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
`
export const TopicItem=styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`
export const ListItem=styled.div`
    width:625px;
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #969696;
    .pic{
        width:123px;
        height:98px;
        display:block;
        float:right;
        border-radius:4px;
        border:1px solid #f0f0f0;
    }
`
export const ListInfo=styled.div`
    width:500px;
    height:100px;
    float:left;
    box-sizing:border-box;
    padding-right:15px;
    position:relative;
    .title{
        font-size:18px;
        font-weight:700;
        margin:-8px 0 10px;
    }
    .content{
        font-size:13px;
        color:#999;
        margin-bottom:8px;
        line-height:24px;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
`
export const Introduce=styled.div`
    position:absolute;
    bottom:0;
    width:100%;
    margin-top:14px;
    .read{
        color:#ea6f5a;
        margin-right:10px;
        font-size:12px;
    }
    .discuss{
        margin-right:10px;
        color:#b4b4b4;
        font-size:12px;
    }
    .iconfont{
        font-size:12px;
    }
`
export const RecommendWrapper=styled.div`
    position:relative;
    width:280px;
    margin:30px 0;
`
export const RecommendItem=styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
    margin-bottom:6px;
    border-radius:4px;
`
export const QRCode=styled.div`
    width:280px;
    padding:10px 22px;
    overflow:hidden;
    box-sizing:border-box;
    margin-bottom:30px;
    border:1px solid #f0f0f0;
    border-radius:6px;
    position:relative;
    .qr{
        display:block;
        float:left;
        width:60px;
        height:60px;
    }
    .download{
        float:right;
        margin-left:7px;
        margin-top:12px;
        .title{
            font-size:15px;
            color:#333;
        }
        .content{
            margin-top:4px;
            font-size:13px;
            color:#999;
        }
    }
`
export const Hide=styled.div`
    
`
export const BigQr=styled.div`
    position:absolute;
    top:128px;
    background:#fff;
    margin-left:44px;
    .scan{
        box-sizing:border-box;
        padding:20px;
        border:1px solid #f0f0f0;
        border-radius:4px;
        .qr2{
            width:150px;
            height:150px;
        }
    }
    .triangle{
        width: 15px;
        height: 1px;
        margin: 0 auto 7px;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid #f0f0f0;
        transform: rotate(45deg);
        transform-origin: left;
    }
    .triangle:after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-top: 1px solid #f0f0f0;
        position: absolute;
        right: -7px;
        top: -9px;
        transform: rotate(90deg);
        transform-origin: bottom;
    }
`
export const WriterWrapper=styled.div`
    width:280px;
`
export const WriteContent=styled.div`
    height: 316px;
    overflow: hidden;
`
export const WriteTitle=styled.div`
    width:280px;
    height:19px;
    font-size:14px;
    color:#969696;
    .iconfont{
        font-size:14px;
        color:#969696;
    }
    .change{
        float:right;
    }
`
export const WriteItem=styled.div`
    width:280px;
    overflow:hidden;
    margin-top:15px;
    .photos{
        width:48px;
        height:48px;
        margin-right:10px;
        float:left;
        .peoplePhoto{
            width:48px;
            height:48px;
            border-radius:50%;
        }
    }
    .people{
        float:left;
        width:170px;
        margin-top:7px;
        .name{
            font-size:14px;
            color:#333;
            padding-top:5px;
        }
        .content{
            margin:2px 0 1px;
            font-size:12px;
            color:#969696;
        }
    }
    .focus{
        float:right;
        margin-top:5px;
        padding:0;
        font-size:13px;
        color:#42c02e;
    }
`
export const LoadMore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;
`
export const BackTop=styled.div`
    width:60px;
    height:60px;
    line-height:60px;
    position:fixed;
    right:10px;
    bottom:100px;
    font-size:14px;
    border:1px solid #ccc;
    text-align:center;
`