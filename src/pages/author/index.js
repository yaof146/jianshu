import React,{ Component } from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
import ReactEcharts from 'echarts-for-react'

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
    Echart,
    Guanggao,
    OtherArticle,

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
    getOption = () => {
        let option= {
            title:{
                text:"最近一周访问量"
            },
            tooltip:{},
            xAxis:{
                name:"时间",
                data:["周一","周二","周三","周四","周五","周六","周日"]
            },
            yAxis:{
                name:"访问量"
            },
            series:[
                {
                    name:"访问量",
                    type:"bar",
                    data:[302,445,723,223,1009,556,786]
                }
            ]
        }
        return option
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
                    <Echart>
                        <ReactEcharts option={this.getOption()} style={{width:'600px',height:'400px'}}></ReactEcharts>
                    </Echart>
                </Main>
                <Recommend>
                    <Guanggao>
                        <div><img alt="" src={require("../../img/0.jpg")} /></div>
                    </Guanggao>
                    <OtherArticle>

                    </OtherArticle>
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