import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
import {
    ListItem,
    ListInfo,
    Introduce,
    LoadMore,
    
} from '../style'
class List extends PureComponent{
    render(){
        const {list,getMoreList,page} =this.props;
        return (
            <div>
                {
                    list.map((item,index)=>{
                        return (
                            <Link key={index} to={"/detail/"+item.get('id')}>
                                <ListItem>
                                    <img className="pic" src={item.get("imgURL")} alt="img3" />
                                    <ListInfo>
                                        <h3 className="title">{item.get("title")}</h3>
                                        <p className="content">{item.get("content")}</p>
                                        <Introduce>
                                            <span className="read">
                                                <i className="iconfont iconzuanshi"></i>
                                                {item.get("read")}
                                            </span>
                                            <span className="discuss">{item.get("name")}</span>
                                            <span className="discuss">
                                                <i className="iconfont iconpinglun"></i>
                                                {item.get("discuss")}
                                            </span>
                                            <span className="discuss">
                                                <i className="iconfont iconxin"></i>
                                                {item.get("like")}
                                            </span>
                                        </Introduce>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                            
                        )
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
            </div>  
        )
    }
}
const mapState=(state)=>({
    list:state.get("home").get("articleList"),//第一种写法
    //list:state.getIn(["home","articleList"]), //第二种写法
    page:state.getIn(['home','articlePage'])
})
const mapDispatch=(dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
})
export default connect(mapState,mapDispatch)(List)