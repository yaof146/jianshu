import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'    //相当于fromJS
const changeHomeData=(result)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
    mouseIn2:result.mouseIn2,
    writeList:result.writeList
})
const addHomeList=(list,nextPage)=>({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage

})
export const mouseEnter=()=>({
    type:constants.MOUSE_ENTER_TWO
})
export const mouseLeave=()=>({
    type:constants.MOUSE_LEAVE_TWO
})
export const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get("/api/home.json").then((res)=>{
            const result=res.data.data;
            const action=changeHomeData(result);
            dispatch(action);
        })
    }
}
export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get("/api/homeList.json?page="+page).then((res)=>{
            const result=res.data.data;
            dispatch(addHomeList(result,page+1));
        })
    }
}
export const toggleTopShow=(show)=>({
    type:constants.TOGGLE_TOP_SHOW,
    show
})