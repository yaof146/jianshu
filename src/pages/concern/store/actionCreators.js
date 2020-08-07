import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const loadMenu=(data) => ({
    type:constants.LOAD_MENU,
    concernList:fromJS(data.concernList),     //出错item.get is not a function，原因：写成了concernList:data.concernList,
    recommendList:fromJS(data.recommendList)
})
export const load=()=>{
    return (dispatch) => {
        axios.get('/api/concern.json').then((res) => {
            const data=res.data.data;
            dispatch(loadMenu(data));
        })
    }
}
