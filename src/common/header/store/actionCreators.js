import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'
const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS
})
export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
})
export const mouseEnter=()=>({
    type:constants.MOUSE_ENTER
})
export const mouseLeave=()=>({
    type:constants.MOUSE_LEAVE
})
export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page
})
export const getList=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data=res.data;
            dispatch(changeList(data.data));
        }).catch(()=>{
            console.log("error")
        })
    }
}
export const personMenuShow = () => ({
    type:constants.PERSONMENUSHOW
})
export const personMenuHide = () => ({
    type:constants.PERSONMENUHIDE
})
export const targle1 = () => ({
    type:constants.TARGLE1,
})
export const targle2 = () => ({
    type:constants.TARGLE2,
})
export const targle3 = () => ({
    type:constants.TARGLE3,
})
export const bankToUnlist = () => ({
    type:constants.BANK_TO_UNLIST,
})