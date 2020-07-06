import axios from 'axios'
import * as constants from './constants' 
const changeLogin=()=>({
    type:constants.CHANGE_LOGIN,
    value:true
})
const changeRegister = () => ({
    type:constants.CHANGE_REGISTER,
    register1:false,
    register2:true,
})

export const logout=()=>({
    type:constants.LOGOUT,
    value:false
})
export const login=(account,password)=>{
    return (dispatch)=>{
        // axios.get 返回的是一个 Promise 对象
        axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
            const result=res.data.data;
            if(result){
                dispatch(changeLogin());
            }else{
                alert("登录失败");
            }
        })
    }
}
export const register = (name,phone,password,msgCode) => {
    return (dispatch) => {
        axios.get('/api/register.json?name=' + name + '&phone=' + phone + '&password' + password +'&msgCode'+msgCode).then((res) => {
            const result = res.data.data;
            if(result){
                dispatch(changeRegister());
            }else{
                alert("注册失败");
            }
        })
    }
}
export const changeInput = (value) => ({
    type:constants.CHANGE_INPUT,
    value
} )
export const changeStatus = (phone) => {
    return (dispatch)=>{
        dispatch(changeInput("loading"));
        axios.get(`/api/msgCode.json?phone=${phone}`).then((res) => {
            const result=res.data;
            if(result.success){
                dispatch(changeInput("success"));
            }else{
                dispatch(changeInput("active"))
            }            
        })
    }
}
export const changeInput2 = (value) => ({
    type:constants.SEND,
    value
})
export const send = (phone) => {
    return (dispatch) => {
        dispatch(changeInput2("loading"));
        axios.get(`/api/msgCode2.json?phone=${phone}`).then((res) => {
            const result=res.data;
            if(result.success){
                dispatch(changeInput2("success"));
            }else{
                dispatch(changeInput2("active"))
            }  
        })
    }
}
export const showCode = (show,value) => ({
    type:constants.SHOW_CODE,
    show,
    value
})
export const togglePage = (loginPage,registerPage,register1,register2) => ({
    type:constants.TOGGLE_PAGE,
    loginPage,
    registerPage,
    register1,
    register2
})