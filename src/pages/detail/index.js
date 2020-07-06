import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'
import {
    DetailWrapper,
    Article,
    Title,
    Text,
    Author,
    Message,
    Name,
    Talk,
    Content,
    Good,
    Input,
    OtherArticle,
    Message2,
    Articles,
    Recommend,

} from './style'
class Detail extends PureComponent{
    render(){
        const { title,content,number,time,word,look,good,talk,money,article1,read1,article2,read2,say,class1,show,hide,remove,send } =this.props;
        return (
            <DetailWrapper>
                <Content>
                    <Good>
                        <div>赞</div>
                        <span>{good}赞</span>
                        <div>赏</div>
                        <span>赞赏</span>
                    </Good>
                    <Article>
                        <Title>{title}</Title>
                        <Message>
                            <img alt="" src={require("../../img/7.png")} />
                            <Name>
                                <div className="top">
                                    <span>卢璐说</span>
                                    <span>关注</span>
                                </div>
                                <div className="fans">
                                <i className="iconfont iconzuanshi"></i> 
                                <span>{number}</span>
                                <span>{time}</span>
                                <span>字数</span>
                                <span>{word}</span>
                                <span>阅读</span>
                                <span>{look}</span>
                                </div>
                            </Name>
                            
                        </Message>
                        <Text dangerouslySetInnerHTML={{__html:content}}></Text>
                    </Article>
                    <Author>
                        <img alt="" src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" />    
                        <OtherArticle>
                            <Message2>
                                <img alt="" src={require("../../img/7.png")} />
                                <Name>
                                    <div className="top">
                                        <span>卢璐说</span>
                                        <span>关注</span>
                                    </div>
                                    <div className="money">
                                        <span>总资产{money}</span>
                                    </div>
                                </Name>
                                
                            </Message2>
                            <Articles>
                                <div>
                                    <h3>{article1}</h3>
                                    <span>阅读{read1}</span>
                                </div>
                                <div>
                                    <h3>{article2}</h3>
                                    <span>阅读{read2}</span>
                                </div>
                            </Articles>
                        </OtherArticle>
                        <Recommend>
                            <h2>推荐阅读</h2>
                            <div className="recom">
                                <div>
                                    <h3>{article1}</h3>
                                    <span>阅读{read1}</span>
                                </div>
                                <div>
                                    <h3>{article2}</h3>
                                    <span>阅读{read2}</span>
                                </div>
                            </div>
                        </Recommend>
                    </Author>  
                </Content>
                <Talk>
                    <div className="say">
                        <Input placeholder="写下你的评论..." onClick={say} className={class1} ref={(input)=>this.say=input}/>
                        <div className={show}>
                            <span>评论{talk}</span>
                            <span>赞{good}</span>
                        </div>
                        <div className={hide+" low"}>
                            <span className="bottom" onClick={()=>send(this.say)}>发布</span>
                            <span className="bottom" onClick={remove}>取消</span>
                        </div>
                    </div>
                </Talk>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState=(state)=>({
    title:state.getIn(["detail","title"]),
    content:state.getIn(["detail","content"]),
    number:state.getIn(['detail',"number"]),
    time:state.getIn(['detail',"time"]),
    word:state.getIn(['detail',"word"]),
    look:state.getIn(['detail',"look"]),
    good:state.getIn(['detail',"good"]),
    talk:state.getIn(['detail',"talk"]),
    money:state.getIn(['detail',"money"]),
    article1:state.getIn(['detail',"article1"]),
    read1:state.getIn(['detail',"read1"]),
    article2:state.getIn(['detail',"article2"]),
    read2:state.getIn(['detail',"read2"]),
    class1:state.getIn(['detail',"class1"]),
    show:state.getIn(['detail',"show"]),
    hide:state.getIn(['detail',"hide"]),
})
const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    },
    say(){
        dispatch(actionCreators.say());
    },
    remove(){
        console.log("aaa");
        dispatch(actionCreators.remove());
    },
    send(say){
        console.log("bbb");
        dispatch(actionCreators.send(say.value));
    }
})
export default connect(mapState,mapDispatch)(withRouter(Detail));