import React,{ useState,useEffect, useCallback,useMemo,useRef,useContext,createContext,useReducer } from 'react'
//useRef
//#region 用法一：获取组件实例对象或者是DOM对象。  
//代码中用useRef创建了couterRef对象，并将其赋给了button的ref属性。这样，通过访问couterRef.current就可以访问到button对应的DOM对象。
// export default function CountReducer(){
//     const [count,setCount] = useState(0);

//     const doubleCount = useMemo(() => {
//         return count * 2;
//     })
//     const countRef = useRef();
//     useEffect(() => {
//         console.log(countRef.current)
//     },[count]);
//     return (
//         <div>
//             <p>count:{count}</p>
//             <p>doubleCount:{doubleCount}</p>
//             <button ref={countRef} onClick={() => {setCount(count+1)} }>+1</button>
//         </div>
//     )
// }
//#endregion

//#region  用法二：“跨渲染周期”保存数据。在组件被多次渲染之后依旧不变，对它修改也不会引起组件渲染。
//useRef 在 react hook 中的作用,  它像一个变量, 类似于 this , 它就像一个盒子, 你可以存放任何东西. 
//createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用。
// export default function CountReducer(){
//     const [count,setCount] = useState(0);
//     const doubleCount = useMemo(() => {
//         return count * 2;
//     })
//     const timerID = useRef();
//     useEffect(() => {
//         timerID.current = setInterval(() => {
//             setCount(count => count + 1)
//         },1000)
//     },[])
//     useEffect(() => {
//         if(count > 10){
//             clearInterval(timerID.current);
//         }
//     })
//     return (
//         <div>
//             <p>count:{count}</p>
//             <p>doubleCount:{doubleCount}</p>
//             <button ref={timerID} onClick={() => {setCount(count+1)} }>+1</button>
//         </div>
//     )
// }

//#endregion

//useReducer 
//useReducer 接受一个 reducer 函数作为参数，reducer 接受两个参数一个是 state 另一个是 action 。
//然后返回一个状态 count 和 dispath，count 是返回状态中的值，而 dispatch 是一个可以发布事件来更新 state 的。  
//#region   简单  count加减
// const initialState = {count:0}

// function reducer(state,action){
//     switch(action.type){
//         case "add" : 
//             return {count : state.count + 1};
//         case "reduce" : 
//             return {count : state.count - 1};
//         default : 
//             throw new Error();
//     }
// }
// export default function CountReducer(){
//     const [state,dispatch] = useReducer(reducer,initialState);
//     return (
//         <div>
//             <p>count:{state.count}</p>
//             <button onClick={() => dispatch({type:"add"})}>+1</button>
//             <button onClick={() => dispatch({type:"reduce"})}>-1</button>
//         </div>
//     )
// }
//#endregion

//#region   登录
// const initState = {
//     name:"Jorn",
//     pwd:123456,
//     isLoading:false,
//     isloaded:false,
//     error:''
// }
// function loginReducer(state,action){
//     switch(action.type){
//         case 'login' : 
//             return {
//                 ...state,
//                 isLoading:true,
//                 error:''
//             };
//         case 'success' : 
//             return {
//                 ...state,
//                 isLoading:false,
//                 isloaded:true
//             };
//         case 'error' : 
//             return {
//                 ...state,
//                 error:action.payload.error,
//                 isLoading:false,
//                 name:'',
//                 pwd:''
//             };
//         default :
//             return state;
//     }
// }
// export default function CountReducer(){
//     const [state,dispatch] = useReducer(loginReducer,initState);
//     const [name,pwd,isLoading,isloaded,error] = state;
//     const login = (event) => {
//         event.preventDefault();
//         dispatch({ type: 'login' });
//         login({ name, pwd })
//             .then(() => {
//                 dispatch({ type: 'success' });
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: 'error',
//                     payload: { error: error.message }
//                 });
//             });
//     }
//     return ( 
//         <div>aaa</div>
//     )
// } 
//#endregion

//useContext
//#region 

// 创建一个 context
const Context = createContext(0)

function Item3 () {
  const count = useContext(Context);
  return (
    <div>{ count }</div>
  )
}

function CountReducer () {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      点击次数: { count } 
      <button onClick={() => { setCount(count + 1)}}>点我</button>
      <Context.Provider value={count}>
        {/* <Item1></Item1>
        <Item2></Item2> */}
        <Item3></Item3>
      </Context.Provider>
    </div>
    )
}

export default CountReducer;

//#endregion

// const themes = {
//     light: {
//       foreground: "#000000",
//       background: "#eeeeee"
//     },
//     dark: {
//       foreground: "#ffffff",
//       background: "#222222"
//     }
//   };
  
//   const ThemeContext = React.createContext(themes.light);
  
//   export default function CountReducer() {
//     return (
//       <ThemeContext.Provider value={themes.dark}>
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
  
//   function Toolbar(props) {
//     return (
//       <div>
//         <ThemedButton />
//       </div>
//     );
//   }
  
//   function ThemedButton() {
//     const theme = useContext(ThemeContext);
//     return (
//       <button style={{ background: theme.background, color: theme.foreground }}>
//         I am styled by theme context!
//       </button>
//     );
//   }


