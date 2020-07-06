import React,{PureComponent} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import { actionCreators } from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    QRCode,
    BigQr,
    Hide,
    BackTop,
} from './style'

class Home extends PureComponent{
    show(){
        const {mouseIn2} = this.props;
        if(mouseIn2){
            return (
                <BigQr>
                    <div className="scan">
                        <img src={require("../../img/7.jpg")} alt="" className="qr2" />
                    </div>
                    <div className="triangle"></div>
                </BigQr>
            )
        }
    }
    scrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        const {mouseEnter,mouseLeave}=this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="aaa" src={require("../../img/0.jpg")} className="banner-img" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <QRCode onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <img src={require("../../img/7.jpg")} alt="" className="qr" />
                        <div className="download">
                            <h3 className="title">下载简书手机App</h3>
                            <p className="content">随时随地发现和创作内容</p>
                        </div>
                    </QRCode>
                    <Hide>
                        {this.show()}
                    </Hide>
                    <Writer />
                </HomeRight>
                {this.props.showScroll?<BackTop onClick={this.scrollTop}>回到顶部</BackTop>:null}              
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);//销毁组件时去除全局绑定
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState=(state)=>{
    return {
        mouseIn2:state.getIn(['home','mouseIn2']),
        showScroll:state.getIn(['home','showScroll'])
    }
}
const mapDispatch=(dispatch)=>{
    return {
        mouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        mouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        changeHomeData(){
            const action=actionCreators.getHomeInfo();
            dispatch(action);
        },
        changeScrollTopShow(){
            if(document.documentElement.scrollTop>400){
                dispatch(actionCreators.toggleTopShow(true));
            }else{
                dispatch(actionCreators.toggleTopShow(false));
            }
        }
    }
}
export default connect(mapState,mapDispatch)(Home)