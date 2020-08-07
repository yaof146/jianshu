import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState=fromJS({
    concernList:[],
    recommendList:[],     //出错concernList.map is not a function，原因：写成了recommendList:"",
    
})
export default (state=defaultState,action) => {
    switch(action.type){
        case constants.LOAD_MENU : 
            return state.merge({
                "concernList":action.concernList,
                "recommendList":action.recommendList
            });
        
        default : 
            return state;
    }
}