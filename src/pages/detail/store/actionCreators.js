import axios from 'axios'
import * as  constants from './constants'
const changeDetail=(title,content,number,time,word,look,good,talk,money,article1,read1,article2,read2)=>({
    type:constants.CHANGE_DETAIL,
    title,
    content,
    number,
    time,
    word,
    look,
    good,
    talk,
    money,
    article1,
    read1,
    article2,
    read2
})
export const getDetail=(id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result=res.data.data;
            dispatch(changeDetail(
                result.title,result.content,result.number,result.time,result.word,result.look,result.good,result.talk,result.money,
                result.article1,result.read1,result.article2,result.read2,
            ));
        })
    }
}
export const say=()=>({
    type:constants.SAY,

})
export const remove=()=>({
    type:constants.REMOVE
})
export const send = (say) =>{
        return (dispatch) => {
            dispatch(remove());
            axios.get(`/api/msgCode.json?say=${say}`).then((res) => {
                console.log("send");
            })
        }
    }