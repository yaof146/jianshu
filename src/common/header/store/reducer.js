import * as constants from './constants'
import {fromJS} from 'immutable'
const defaultState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1,
    class1:false,
    active1:false,
    active2:false,
    active3:false,
});
export default (state=defaultState,action)=>{
    // if(action.type===constants.SEARCH_FOCUS){
    //     // return {
    //     //     focused:true,
    //     // }
    //     return state.set("focused",true);       //immutable对象的set()方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    // }
    // if(action.type===constants.SEARCH_BLUR){
    //     return state.set("focused",false)
    // }
    // if(action.type===constants.CHANGE_LIST){
    //     return state.set('list',action.data).set('totalPage',action.totalPage);
    // }
    switch(action.type){
        case constants.SEARCH_FOCUS : 
            return state.set("focused",true);
        case constants.SEARCH_BLUR : 
            return state.set("focused",false);
        // case constants.CHANGE_LIST : return state.set('list',action.data).set('totalPage',action.totalPage);//第一种写法
        case constants.CHANGE_LIST : 
            return state.merge({            //第二种写法，相当于多次调用set，性能更高
                list:action.data,
                totalPage:action.totalPage
            })
        case constants.MOUSE_ENTER : 
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE : 
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE : 
            return state.set('page',action.page);
        case constants.PERSONMENUSHOW : 
            return state.set('class1',true);
        case constants.PERSONMENUHIDE : 
            return state.set('class1',false)
        case constants.TARGLE1 : 
            return state.merge({
                "active1":false,
                "active2":false,
                "active3":false
            });
        case constants.TARGLE2 : 
            return state.merge({
                "active1":true,
                "active2":true,
                "active3":false
            });
        case constants.TARGLE3 : 
            return state.merge({
                "active1":true,
                "active2":false,
                "active3":true
            });
        case constants.BANK_TO_UNLIST : 
            return state.set("bank",false)
        default : return state;
    }
}