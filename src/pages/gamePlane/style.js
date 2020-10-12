import styled from 'styled-components'


export const Game = styled.div`
    width:25%;height:100%;margin:20px auto;
`
export const Virus = styled.div`
    height:300px;background: #aaa;
    .circle{
        width:30px;height:30px;background:yellow;border-radius: 50%;position:relative;
    }
`
export const Bullet = styled.div`
    background: #ccc;
    #plane{
        width:150px;height:50px;background: blue;margin:0 auto;position: relative;
    }
    .move{
        width:150px;margin:0 auto;
        display:flex;
        justify-content:space-between;
    }
    button{}
`