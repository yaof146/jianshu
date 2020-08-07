import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'
import {reducer as downloadReducer} from '../pages/download/store'
import {reducer as authorReducer} from '../pages/author/store'
import {reducer as concernReducer} from '../pages/concern/store'

const reducer=combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer,
    download:downloadReducer,
    author:authorReducer,
    concern:concernReducer,
})
export default reducer