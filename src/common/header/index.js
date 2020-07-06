import React,{Component} from "react"
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Link} from 'react-router-dom'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    AHref,
    SearchWrapper,
    Writting,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,

} from './style'

class Header extends Component{
    getListArea(){
        const {focused,list,page,totalPage,mouseIn,mouseEnter,mouseLeave,changePage} =this.props;
        const pageList=[];
        const newList=list.toJS();
        if(newList.length){     //newList不为空时才执行
            for(let i=(page-1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>changePage(page,totalPage,this.spinIcon)}>
                            <i className="iconfont iconspin" ref={(icon)=>{this.spinIcon=icon}}></i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        const {focused,inputFocus,onBlur,list,login,logout} =this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <Link to="/download"><NavItem className="left">下载App</NavItem></Link>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={200} classNames="slide">
                            <NavSearch 
                                className={focused?'focused':''}
                                onFocus={()=>inputFocus(list)}
                                onBlur={onBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <AHref><i className={focused?'focused iconfangdajing_huaban1 iconfont':'iconfangdajing_huaban1 iconfont'}></i></AHref>
                        {this.getListArea()}
                    </SearchWrapper>
                    {
                        login?
                        <NavItem className="right" onClick={logout}>退出</NavItem>:
                        <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont iconAa"></i>
                    </NavItem>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Writting>
                            <Button className="writting">写文章</Button>
                            <i className="iconfont iconPensyumaobi"></i>
                        </Writting>
                    </Link>
                    
                    <Link to="/login"><Button className="reg">注册</Button></Link>
                </Addition>
            </HeaderWrapper>
        )
    }
    // componentDidMount(){
    //     const action=getList();
    //     store.dispatch(action);
    // }
}

const mapStateToProps=(state)=>{
    return {
        focused:state.get('header').get("focused"),//第一种写法
        //focused:state.getIn(['header','focused'])   //第二种写法
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        login:state.getIn(['login','login'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        inputFocus(list){
            // if(list.size===0){                //第一种写法
            //     const action=actionCreators.searchFocus(); dispatch(action);  
            // }
            (list.size===0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus());
        },
        onBlur(){
            dispatch(actionCreators.searchBlur());
        },
        mouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        mouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        changePage(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{

            }
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            } 
            spin.style.transform="rotate("+(originAngle+360)+"deg)";
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header)