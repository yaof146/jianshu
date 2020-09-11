import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Write extends PureComponent{
    render(){
        const {loginStatus}=this.props;
        if(loginStatus){
            return (
                <div>写文章页面
                    <Redirect to="/hooks/hooks3">reducer</Redirect>
                </div>
            )
        }else{
            return <Redirect to="/login"></Redirect>
        }
        
    }
}
const mapState=(state)=>({
    loginStatus:state.getIn(['login','login'])
})

export default connect(mapState,null)(Write);

