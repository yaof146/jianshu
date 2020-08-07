import * as constants from './constants'
//#region
// import {fromJS} from 'immutable'

// const defaultState=fromJS({
//     login:false
// })
// export default (state=defaultState,action)=>{
//     switch (action.type){
//         case constants.CHANGE_LOGIN : return state.set('login',action.value);
//         case constants.LOGOUT : return state.set('login',action.value);
//         default:return state;
//     }
// }
//#endregion

const defaultState={
    login:false,
    register1:true,
    register2:false,
    status:"unable",
    code:"hide",
    status2:"unable",
    loginPage:"hide",
    registerPage:"show",
    color:"red",
}
export default (state=defaultState,action)=>{
    switch (action.type){
        case constants.CHANGE_LOGIN : 
            return {
                ...state,
                login:action.value
            }
        case constants.LOGOUT :
            return {
                ...state,
                login:action.value
            }
        case constants.CHANGE_INPUT : 
            return {
                ...state,
                status:action.value
            }
        case constants.SHOW_CODE : 
            return {
                ...state,
                code:action.show,
                status2:action.value, 
            }
        case constants.SEND : 
            return {
                ...state,
                status2:action.value
            }
        case constants.CHANGE_REGISTER : 
            return {
                ...state,
                register1:action.register1,
                register2:action.register2
            }
        case constants.TOGGLE_PAGE : 
            return {
                ...state,
                loginPage:action.loginPage,
                registerPage:action.registerPage,
                register1:action.register1,
                register2:action.register2
            }
        default:
            return state;
    }
}