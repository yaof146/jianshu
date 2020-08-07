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
    constructor(props){
        super(props);
        this.state = {
            userDropdownList:[
                {
                    id:1,
                    icon:'iconfangdajing_huaban1',
                    text:'我的主页'
                },
                {
                    id:2,
                    icon:'iconfangdajing_huaban1',
                    text:'收藏的文章'
                },
                {
                    id:3,
                    icon:'iconfangdajing_huaban1',
                    text:'喜欢的文章'
                },
                {
                    id:4,
                    icon:'iconfangdajing_huaban1',
                    text:'已购内容'
                },
                {
                    id:5,
                    icon:'iconfangdajing_huaban1',
                    text:'我的钱包'
                },
                {
                    id:6,
                    icon:'iconfangdajing_huaban1',
                    text:'设置'
                },
                {
                    id:7,
                    icon:'iconfangdajing_huaban1',
                    text:'帮助与反馈'
                },
                
            ],
            // newLogin:true
        }
    }
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
    bankToUnlist(login){
        // if(login === true){
        //     console.log("back");
        //     this.state.newLogin=false;
        //     console.log(this.state.newLogin);
        //     return this.state.newLogin;
        // }
    }

    renderUserDropdownList(list){
        return list.map((item) => {
            return <li key={item.id}>
                <i className={`iconfont ${item.icon}`} />
                <span>{item.text}</span>
            </li>;
        });
    }
    render(){
        const { focused,inputFocus,onBlur,list,login,logout,personMenuShow,personMenuHide,class1,targle1,targle2,targle3,active1,active2,active3 } = this.props;
        const { userDropdownList } = this.state;
        return (
            <HeaderWrapper>
                {
                    login?
                    <div className="listed">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <Nav className="login">
                            <Link to="/"><NavItem className={active1?"left":"left active"} onClick={targle1}>发现</NavItem></Link>
                            <Link to="/concern"><NavItem className={active2?"left active":"left"} onClick={targle2}>关注</NavItem></Link>
                            <Link to="/download"><NavItem className={active3?"left active":"left"} onClick={targle3}>消息</NavItem></Link>
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
                            <NavItem 
                                className={class1?"right headSculpture bgcolor":"right headSculpture"}
                                onMouseEnter={personMenuShow}
                                onMouseLeave={personMenuHide}
                            >
                                <img alt="" src={require("../../img/0.jpg")} />
                                <div 
                                    className={class1 ? 'show ' : 'hide' }
                                    onMouseEnter={personMenuShow}
                                >
                                    <ul>
                                        {
                                            this.renderUserDropdownList(userDropdownList)
                                        }
                                        <li onClick={() => {this.bankToUnlist(login);this.state.newLogin=true;}}>
                                            <i className='iconfont iconfangdajing_huaban1' />
                                            <span>退出</span>
                                        </li>
                                    </ul>
                                </div>
                            </NavItem>
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
                        </Addition>
                    </div>:
                    <div className="unlisted">
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
                    </div>
                    
                }
            </HeaderWrapper>
        )
    }
    // componentDidMount(){
    //     var b = null
    //     return(<BContainer ref={(node) => b = node}/>)
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
        login:state.getIn(['login','login']),
        class1:state.getIn(['header','class1']),
        active1:state.getIn(['header','active1']),
        active2:state.getIn(['header','active2']),
        active3:state.getIn(['header','active3']),
        back:state.getIn(['header','back'])
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
        },
        personMenuShow(){
            dispatch(actionCreators.personMenuShow())
        },
        personMenuHide(){
            dispatch(actionCreators.personMenuHide())
        },
        targle1(){
            dispatch(actionCreators.targle1())   
        },
        targle2(){
            dispatch(actionCreators.targle2())   
        },
        targle3(){
            dispatch(actionCreators.targle3())   
        },
        
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header)