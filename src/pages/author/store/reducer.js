import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState=fromJS({
    // list:[{
    //     id:1,
    //     name:'jok'
    // },{
    //     id:2,
    //     name:'kdn'
    // }],
    authorList:[],
    acticleList:[]
})

export default (state=defaultState,action)=>{
    // if(action.type===constants.ADD_LIST){
    //     return state.set('authorList',fromJS(action.authorList))
    // }
    switch(action.type){
        case constants.ADD_LIST :
            return state.merge({
                "authorList" : action.authorList,
                "acticleList" : action.acticleList
            })
            //state.set('authorList',action.authorList);
        default : 
            return state;
    }
}