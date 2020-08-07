import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'

const changeList=(data)=>({
    type : constants.ADD_LIST,
    authorList : fromJS(data.authorList),     //如果写成authorList:data.authorList，就会报错：item.get is not defined,
    acticleList : fromJS(data.acticleList)
})

export const changeAuthorData=()=>{
    return (dispatch)=>{
        axios.get('/api/author.json').then((res)=>{
            const data=res.data.data;
            const action=changeList(data);
            dispatch(action);
        }).catch(()=>{
            console.log("error")
        })
    }
}
