import React,{ useState,useEffect, useCallback,useMemo } from 'react'

// useMemo
// const set = new Set();
// export default function Callback() {
//     const [count, setCount] = useState(1);
//     const [val, setVal] = useState('');
 
//     const callback = useMemo(() => {
//         console.log("count:"+count);
//         return count;
//     },[count]);
//     set.add(callback);   //set.add添加元素   set.size获取set的长度
    
//     return <div>
//         <h4>{count}</h4>
//         <h4>{set.size}</h4> 
//         <div>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <input value={val} onChange={event => setVal(event.target.value)}/>
//         </div>
//     </div>;
// }


//useCallback
// export default function Callback() {
//     const [count, setCount] = useState(1);
//     const [val, setVal] = useState('');
 
//     const callback = useCallback(() => {
//         console.log("count:"+count);
//         return count;
//     },[count]);
    
//     return <div>
//         <h4>{count}</h4>
//         <Child callback={callback} />
//         <div>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <input value={val} onChange={event => setVal(event.target.value)}/>
//         </div>
//     </div>;
// }
// function Child({ callback }) {
//     const [count, setCount] = useState(() => callback());
//     useEffect(() => {
//         setCount(callback());
//     }, [callback]);
//     return <div>
//         {count}
//     </div>
// }

//useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；
//并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。

//useCallback练习
export default function Callback(){
    const [count1,setCount1] = useState(1);
    
    const callback1=useCallback(() => {
        return count1
    },[count1])
    return (
        <div>
            <p>count1:{count1}</p>
            <Child callback1={callback1}/>
            <button onClick={() => {setCount1(count1+1)}}>count1+1</button>
        </div>
    )
}
function Child({callback1}){
    const [count2,setCount2] = useState(5);
    const [count1,setCount1] = useState(()=>callback1()) ;
    useEffect(() => {
        setCount1(callback1())
    },[callback1]);
    return <div>
        <p>count2:{count2}</p>
        count1+count2:{count1+count2}
    </div>
}