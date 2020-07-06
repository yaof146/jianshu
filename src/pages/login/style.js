import styled from 'styled-components'

export const LoginWrapper=styled.div`
    position:absolute;
    z-index:0;
    top:56px;
    bottom:0;
    left:0;
    right:0;
    background:#eee;
    height:100%;
    min-height:750px;
    font-size:14px;
    text-align:center;
`
export const LoginBox=styled.div`
    width:400px;
    height:600px;
    background:#fff;
    box-sizing:border-box;
    margin:60px auto 0;
    padding:50px 50px 30px;
    box-shadow:0 0 8px rgba(0 0 0 .1);
`
export const Head=styled.div`
    display:flex;
    box-sizing:border-box;
    padding:10px 20px;
    justify-content:space-between;
    margin-bottom:30px;
    font-size:18px;
    .light{
        color:red;
    }
    .dark{
        color:#ccc;
    }
    span{
        cursor:pointer;
    }
`
export const Toggle=styled.div`
    div{
        width:100%;
        margin-bottom:10px;
    }
    input{
        margin-bottom:10px;
    }
    p{
        margin-top:10px;
        font-size:12px;
        a{
            color:blue;
        }
    }
    .left{
        float:left;
        width:50%;
    }
    .show{
        display:block;
    }
    .hide{
        display:none;
    }
    .clear{
        float:clear;
    }
    &.show{
        display:block;
    }
    &.hide{
        display:none;
    }
`
export const Input=styled.input`
    width:100%;
    height:50px;
    display:block;
    padding:4px 12px 4px 35px;
    border:1px solid #c8c8c8;
    background: hsla(0,0%,71%,.1);
    box-sizing:border-box;
    border-radius:5px;
`
export const Button=styled.button`
    width:100%;
    margin-top:20px;
    padding:9px 18px;
    box-sizing:border-box;
    border:none;
    border-radius:25px;
    background:#42c02e;
    cursor:pointer;
    font-size:18px;
    &.unableBtn{
        background:grey;
        color:#000;
        
    }
    &.btn{
        width: 106px;
        margin: 5px;
        height: 40px;
        font-size: 14px;
        float:right;
    }
`
export const Others=styled.div`
    border-top:1px solid #ccc;
    margin-top:30px;
    p{
        position:relative;
        top:-6px;
        font-size:12px;
        color:#b5b5b5;
        background:#fff;
        margin: 0 auto;
        width: 130px;
    }
    div{
        display:flex;
        justify-content:space-around;
        width:200px;
        margin:0 auto;
        margin-top:20px;
        i{
            font-size:28px;
            &.iconweibo{
                color:red;
            }
            &.iconweixin{
                color:green;
            }
            &.iconqq{
                color:blue;
            }
        }
    }
`