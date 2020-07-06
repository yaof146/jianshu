import {fromJS} from 'immutable'
import * as constants from './constants'
const defaultState=fromJS({
    title:'',
    content:'',
    number:'',
    time:"",
    word:"",
    look:"",
    good:"",
    talk:"",
    money:"",
    article1:"",
    read1:"",
    article2:"",
    read2:"",
    class1:"inp1",
    show:"show",
    hide:"hide"
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_DETAIL : return state.merge({
            title:action.title,
            content:action.content,
            number:action.number,
            time:action.time,
            word:action.word,
            look:action.look,
            good:action.good,
            talk:action.talk,
            money:action.money,
            article1:action.article1,
            read1:action.read1,
            article2:action.article2,
            read2:action.read2
        });
        case constants.SAY : 
            return state.merge({
                class1: "inp1 inp2",
                show:"hide",
                hide:"show"
            });
        case constants.REMOVE : 
            return state.merge({
                class1: "inp1",
                show:"show",
                hide:"hide"
            });
        default:return state;
    }
}