import styled from 'styled-components'
import logoPic from '../../statics/1.png'
export const HeaderWrapper =styled.div`
    z-index:1;
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`
export const Logo=styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav=styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`
export const NavItem=styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border-radius:19px;
    border:none;
    outline:none;
    margin-top:9px;
    padding:0 30px 0  20px;
    box-sizing:border-box;
    background:#eee;
    font-size:14px;
    margin-left:20px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`
export const Addition=styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
`
export const Button=styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
        padding-left:30px;
    }
`
export const AHref=styled.a`
    position:absolute;
    top:13px;
    right:6px;
    background-size:contain;
    text-align:center;
`
export const SearchWrapper=styled.div`
    position:relative;
    float:left;
    .iconfont{
        font-size: 20px;
        color: #777;
        border-radius:15px;
        width:30px;
        line-height:30px;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`
export const Writting=styled.div`
    position:relative;
    float:right;
    .iconfont{
        position: absolute;
        left: 10px;
        top: 20px;
        color:#fff;
    }
`
export const SearchInfo=styled.div`
    position:absolute;
    width:240px;
    left:0;
    top:56px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
export const SearchInfoTitle=styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch=styled.span`
    font-size:13px;
    float:right;
    absolute:relative;
    cursor:pointer;
    .iconspin{
        font-size:12px;
        margin-right:2px;
        display:block;
        float:left;
        transition:all .2s ease-in;
        transform-origin:center center;
        line-height:13px;
        width:13px;
        position:absolute;
        right:70px;
        top:23px;
    }
`
export const SearchInfoItem=styled.a`
    font-size:12px;
    padding:0 5px;
    line-height:20px;
    border:1px solid #ddd;
    color:#787878;
    display:block;
    border-radius:3px;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
`
export const SearchInfoList=styled.div`
    overflow:hidden;
`