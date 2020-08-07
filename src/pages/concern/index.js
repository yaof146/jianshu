import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import {
    ConcernWrapper,
    AllConcern,
    RecommendMenu,
    SelectMenu,
    MenuItem,

} from './style'
class Concern extends Component{
    render(){
        const { concernList,recommendList } = this.props;
        return (
            <ConcernWrapper>
                <AllConcern>
                    <h2>全部关注</h2>
                    <div className="addConcern">
                        <div><img alt="" src={require("../../img/0.jpg")} /></div>
                        <span>添加关注</span>
                    </div>
                    <ul>
                        {   
                            concernList.map((item,index) => {
                                return (
                                    <li key={index}>
                                        <div>
                                            <img alt="" src={require("../../img/5.jpg")} />
                                            <span>{item.get("name")}</span>
                                        </div>
                                        <span>{item.get("number")}</span>
                                    </li>
                                )
                            })
                        }
                        {/* <li>
                            <div>
                                <img alt="" src={require("../../img/5.jpg")} />
                                <span>摄影</span>
                            </div>
                            <span>100</span>
                        </li>
                        <li>
                            <div>
                                <img alt="" src={require("../../img/5.png")} />
                                <span>读书</span>
                            </div>
                            <span>100</span>
                        </li> */}
                    </ul>
                </AllConcern>
                <RecommendMenu>
                    <SelectMenu>
                        <li>全部推荐</li>
                        <li><i className="iconfont iconxin"></i>推荐作者</li>
                        <li><i className="iconfont iconxin"></i>推荐专题</li>
                    </SelectMenu>
                    <MenuItem>
                        <li>
                            <div>
                                <h3>简书推荐专题</h3>
                                <div className="introduce">
                                    <img alt="" src={require("../../img/5.jpg")} />
                                    <div className="word">
                                        <h2>摄影</h2>
                                        <p>《摄影》专题介绍 用文字记录美好生活 用镜头捕捉精彩瞬间 摄影，...</p>
                                        <div>
                                            <i className="iconfont iconxin"></i>
                                            <span>11篇文章</span>
                                            <span>133人关注</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="isConcern">
                                <div>
                                    <span>关注</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>简书推荐专题</h3>
                                <div className="introduce">
                                    <img alt="" src={require("../../img/5.jpg")} />
                                    <div className="word">
                                        <h2>摄影</h2>
                                        <p>《摄影》专题介绍 用文字记录美好生活 用镜头捕捉精彩瞬间 摄影，...</p>
                                        <div>
                                            <i className="iconfont iconxin"></i>
                                            <span>11篇文章</span>
                                            <span>133人关注</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="isConcern">
                                <div>
                                    <span>关注</span>
                                </div>
                            </div>
                        </li>
                    </MenuItem>
                </RecommendMenu>
            </ConcernWrapper>
        )
    }
    componentDidMount(){
        this.props.load();
    }
}
const mapState=(state)=>{
    return {
        concernList:state.getIn(["concern","concernList"]),
        recommendList:state.getIn(["concern","recommendList"])
    }
}
const mapDispatch=(dispatch)=>{
    return {
        load(){
            dispatch(actionCreators.load());
        }
    }
}
export default connect(mapState,mapDispatch)(Concern)
