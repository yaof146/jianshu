import React, { Component } from 'react'
import {connect} from 'react-redux' 
import { 
    Game,
    Virus,
    Bullet,

 } from './style'

class Games extends Component{
    render(){
        return (
            <Game>
                <Virus>
                    <div class="first circle">11</div>
                    <div class="second circle">22</div>
                </Virus>
                <Bullet>
                    <div id="plane">
        
                    </div>
                    <div class="move">
                        <button onclick="moveLeft"> 左 </button>
                        <button onclick="moveRight"> 右 </button>
                    </div>
                </Bullet>
            </Game>
        )
    }
}
const mapState = (state) => {
    return {

    }
}
const mapDispatch = (idspatch) => {
    return {

    }
}
export default connect(mapState,mapDispatch)(Games)
