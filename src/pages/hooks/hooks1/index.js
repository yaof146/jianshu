//hooks来源、function函数怎么写、useState,useEffect怎么用，useEffect怎么跟生命周期函数联系起来
//useMemo、useCallback都是使参数（函数）不会因为其他不想关的参数变化而重新渲染。[]内可以放入你改变数值就重新渲染参数（函数）的对象。如果[]为空就是只渲染一次，之后都不会渲染。

//1.
// 练习react hooks
// Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 
// 这使得你不使用 class 也能使用 React。
// import React,{ useState,useEffect } from 'react'

// function Hooks(){
//     const [name,setName] = useState("Mary");
//     const [age,setAge] = useState(12);
//     const [user,setUser] = React.useState({person:"Lucy",age:23,job:"teacher"})
//     const [count,setCount] = React.useState(0);
//     useEffect(() => {    //相当于componentDidMount,componentDidUpdate,componentWillUnmount的集合，在第一次渲染之后和每次更新之后都会执行
//         Document.title = "This is a title."
//         console.log("useEffect")
//     },[count])     //在count改变时才执行useEffect
//     const click = () => {
//         setAge(34);
//         setName("Jack");
//         setUser({
//             ...user,
//             person:"Rose",
//             job:"doctor"
//         })
//     }
//     const add = () => {
//         setCount(count+1)
//     }
//     const reduce = () => {
//         setCount(count-1)
//     }
//     return (
//         <div >
//             <div>hello, {name} is {age} years old.</div>
//             <p>{user.person} is a {user.job}.She is {user.age} years old.</p>
//             <button onClick={click}>点击</button>
//             <div>{count}</div>
//             <button onClick={add}>+1</button>
//             <button onClick={reduce}>-1</button>
//         </div>
//     )
// }
// export default Hooks


//2.
import React,{ useState,useEffect, useCallback } from 'react'
import './style.css'

function Hooks(){
    // const [ user,setUser ] = useState({name:"Mary",age:12,job:"Teacher"});
    // const [ fruit,setFruit ] = useState("apple");
    // const [ count,setCount ] = useState(0);
    const [state, setState] = useState({
        user: {
            name:'Mary',
            age:12,
            job:"Teacher"
        },
        fruit:'apple',
        count:0,
        boolean:true
    });
    useEffect(() => {
        if(!state.boolean){
            console.log("componentDidUpdate")
        }
        if(state.boolean){
            console.log("componentDidMount")
        }
        setState({
            ...state,
            boolean:false
        })
        console.log(`effect-----the count is ${state.count}`);
    },[state.count])
//useCallback 的真正目的还是在于缓存了每次渲染时 inline callback 的实例，这样方便配合上子组件的 shouldComponentUpdate 
//或者 React.memo 起到减少不必要的渲染的作用。需要不断提醒自己注意的是，在大部分 callback 都会是 inline callback 的未来，
//React.memo 和 React.useCallback 一定记得需要配对使用，缺了一个都可能导致性能不升反“降”，毕竟无意义的浅比较也是要消耗那
//么一点点点的性能。
    const useCallbackTest = useCallback(() => {
        // setState({
        //     ...state,
        //     //count:state.count + 2
        //     user:{
        //         ...state.user,
        //         name:"hfdb"
        //     }
        // })
        console.log("name")
    },[state.user.name])

    const addCount = () => {
        // setCount( count + 1 );
        setState({
            ...state,
            count:state.count+1
        });
    }
    const reduceCount = () => {
        setState( {
            ...state,
            count:state.count - 1
        } );
    }
    const changeName = () => {
        setState({
            ...state,
            user:{
                ...state.user,
                name:"Jack"
            }
        })
    }
    const changeAge = () => {
        setState({
            ...state,
            user:{
                ...state.user,
                age:45
            }
        })
    }
    const changeJob = () => {
        setState({
            ...state,
            user:{
                ...state.user,
                job:"doctor"
            }
        })
    }
    return (
        <div style={{width:"100px",height:"300px",margin:"20px auto",textAlign:"center"}}>
            <p style={{margin:"10px"}}>{state.count}</p>
            <button style={{margin:"10px"}} onClick={addCount}>+1</button>
            <button style={{margin:"10px"}} onClick={reduceCount}>-1</button>
            <button style={{margin:"10px"}} onClick={() => {setState({...state,count:0})}}>reset</button>
            {/* <button style={{margin:"10px"}} onClick={useCallbackTest}>fruit改变</button> */}
            <input onChange={useCallbackTest} />
            <table style={{borderCollapse:"collapse"}}>
                <tr>
                    <th onClick={changeName}>姓名</th>
                    <th onClick={changeAge}>年龄</th>
                    <th onClick={changeJob}>工作</th>
                </tr>
                <tr>
                    <td>{state.user.name}</td>
                    <td>{state.user.age}</td>
                    <td>{state.user.job}</td>
                </tr>
            </table>
        </div>
    )
}
export default Hooks






//3.
//自定义hooks
//如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：
// import React,{ useState,useEffect } from 'react'

// function useFriendStatus(props){
//     const [ isOnline,setIsOnline ] = useState(null);
//     useEffect(() => {
//         function handleStatesChange(){
//             setIsOnline('isOnline');
//         }
//         CharAPI.subscribeToFriendStatus(props.friend.id,handleStatesChange);
//         return () => {  //为什么要在 effect 中返回一个函数？ 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。
//             CharAPI.unsubscribeFromFriendStatus(props.friend.id,handleStatesChange);
//         };
//     });
//     if (isOnline === null) {
//         return 'Loading...';
//     }
//     return isOnline
// }
// function friendStatus(props){
//     const isOnline=useFriendStatus(props.friend.id);
//     if(isOnline === null){
//         return "loading...";
//     }
//     return isOnline ? 'online' : 'offline';
// }
// function friendListItem(props){
//     const isOnline=useFriendStatus(props.friend.id);
//     return (
//         <li style={{color : isOnline ? 'green' : 'black'}}>{props.friend.name}</li>
//     )
// }
// export default{ friendStatus,friendListItem }