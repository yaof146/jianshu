import React,{ Component } from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
    AuthorWrapper,
    Main,
    Recommend,
    Message,
    Name,
    Focus,
    AuthorList,
    AuthorItem,
    Article,
    Menu,
    ArticleList,
    ArticleItem,

}from './style'

class Author extends Component{
    constructor(props){
        super(props);
        this.state={
            menuList:[
                {
                    id:1,
                    icon:"iconfont iconxin",
                    text:"文章"
                },{
                    id:2,
                    icon:"iconfont iconxin",
                    text:"动态"
                },{
                    id:3,
                    icon:"iconfont iconxin",
                    text:"最新评论"
                },{
                    id:4,
                    icon:"iconfont iconxin",
                    text:"热门"
                },
            ]
        }
    }
    getMenuList(list){
        return list.map((item) => {
            return <li key={item.id}>
                <i className={`iconfont ${item.icon}`} />
                <span>{item.text}</span>
            </li>
        })
    }
    render(){
        const { authorList,acticleList }  = this.props;
        const { menuList } = this.state;
        return (
            <AuthorWrapper>
                <Main>
                    <Message>
                        <img alt="" src={require("../../img/7.png")} />
                        <Name>
                            <h3>卢璐说</h3>
                            <div className="fans">
                                <AuthorList>
                                    {   
                                         authorList.map((item)=>{
                                            return (<AuthorItem key={item.get("id")}>
                                                    <span>{item.get("number")}</span>
                                                    <div>{item.get("word")}></div>
                                                </AuthorItem>)
                                        })
                                        //this.add2()
                                    }
                                </AuthorList>
                            </div>
                        </Name>
                        <Focus>
                            <button className="send">发简信</button>
                            <button className="focus">+关注</button>
                        </Focus>
                    </Message>
                    <Article>
                        <Menu>
                            <ul>
                               {this.getMenuList(menuList)} 
                            </ul>
                        </Menu>
                        <ArticleList>
                            <ul>
                                {
                                    acticleList.map((item) => {
                                        return (
                                            <ArticleItem key={item.get("id")}>
                                                <div className="introduce">
                                                    <h2>{item.get("title")}</h2>
                                                </div>
                                                <div className="img">
                                                    <img alt="" />
                                                </div>
                                            </ArticleItem>
                                        )
                                    })
                                }
                            </ul>
                            
                        </ArticleList>
                    </Article>
                </Main>
                <Recommend>

                </Recommend>
            </AuthorWrapper>
        )
    }
    componentDidMount(){
        this.props.changeAuthorData();
    }
}
const mapState=(state)=>{
    return {
        authorList : state.getIn(['author','authorList']),
        acticleList : state.getIn(['author','acticleList'])
        
    }
}
const mapDispatch=(dispatch)=>{
    return {
        changeAuthorData(){
            const action=actionCreators.changeAuthorData();
            dispatch(action);
        }
    }
}

export default connect(mapState,mapDispatch)(Author)