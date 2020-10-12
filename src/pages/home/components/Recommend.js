import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {
    RecommendWrapper,
    RecommendItem
} from '../style'

class Recommend extends PureComponent{
    render(){
        const {list}=this.props;
        return (
            <RecommendWrapper>
                {
                   list.map((item)=>{
                       return (
                        // <Link key={item.get('id')} to={'/game'}>
                        //     <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")}></RecommendItem>
                        // </Link>
                        <Link key={item.get('id')} to={item.get('toUrl')} style={{textDecoration:"none"}}>
                            <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")}>{item.get("game")}</RecommendItem>
                        </Link>
                       )
                   }) 
                }
            </RecommendWrapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(["home","recommendList"])
})

export default connect(mapState,null)(Recommend)