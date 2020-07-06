import axios from 'axios'
import * as constants from './constants'
// import {fromJS} from 'immutable'

const changeList=(data)=>({
    type:constants.ADD_LIST,
    authorList:data.authorList
})

export const changeAuthorData=()=>{
    return (dispatch)=>{
        axios.get('/api/author.json').then((res)=>{
            const data=res.data.data;
            console.log(data);
            const action=changeList(data);
            dispatch(action);
        }).catch(()=>{
            console.log("error")
        })
    }
}
