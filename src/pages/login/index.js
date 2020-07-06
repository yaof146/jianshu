import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Head,
    Toggle,
    Input,
    Button,
    Others,
} from './style'
class Login extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            time:60
        }
    }
    statusChange(status){
        if(status === "unable"){
            return <Button className="unableBtn btn">获取验证码</Button>
        }else if(status === "active"){
            return <Button className="btn" onClick={() => this.props.changeStatus(this.phone)}>获取验证码</Button>
        }else if(status === "loading"){
            return <Button className="btn">获取验证码...</Button>
        }else if(status === "success"){
            return <Button className="btn">( {this.state.time} s)</Button>;
        }
    };

    timeFn(n){
        setTimeout(() => {
            this.timeFn(n-1);
        }, 1000)
        
    }
    
    statusChange2(status){
        if(status === "unable"){
            return <Button className="unableBtn btn">获取验证码</Button>
        }else if(status === "active"){
            return <Button className="btn" onClick={() => this.props.send(this.phone)}>获取验证码</Button>
        }else if(status === "loading"){
            return <Button className="btn">获取验证码...</Button>
        }else if(status === "success"){
            return <Button className="btn">(60s)</Button>
            
            // for (var i=0; i<=60; i++) {
            //      (function(j) {
            //         setTimeout( function timer() {
            //             console.log(60-j)
            //             return <Button> 获取验证码( {60-j} s)</Button>
            //         }, j*1000 );
            //     })(i);
            // }
        }
    }
    render(){
        const {loginStatus,login,changeInput,status,register,code,showCode,status2,register1,register2,toggleLoginPage,toggleRegisterPage,loginPage,registerPage }=this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Head>
                            <span className={register1?"dark":"light"} onClick={toggleLoginPage}>登录</span>
                            <div></div>
                            <span className={register2?"dark":"light"} onClick={toggleRegisterPage}>注册</span>
                        </Head>
                        <Toggle className={loginPage}>
                            <Input placeholder="手机号" maxLength="11" ref={(input)=>this.phone=input} onInput={(e)=>changeInput(e)} />
                            <div>
                                <Input className="left" type="test" placeholder="验证码" ref={(input)=>this.msgCode=input} />
                                {this.statusChange(status)}
                                <div className="clear"></div>
                            </div>
                            
                            <Button onClick={()=>login(this.phone,this.msgCode)}>登录</Button>
                            <Others>
                                <p>社交帐号登录</p>
                                <div>
                                    <i className="iconfont iconweibo"></i>
                                    <i className="iconfont iconweixin"></i>
                                    <i className="iconfont iconqq"></i>
                                </div>
                            </Others>
                        </Toggle>
                        <Toggle className={registerPage}>
                            <Input placeholder="你的昵称" ref={(input)=>this.name=input} />
                            <Input placeholder="手机号" maxLength="11" ref={(input)=>this.phone=input} onInput={(e)=>showCode(e)} />
                            <div className={code}>
                                <Input className="left" placeholder="验证码" type="test" ref={(input)=>this.msgCode=input} />
                                {this.statusChange2(status2)}
                                {/* <Button className="btn" onClick={() => send(this.phone)}>发送验证码</Button> */}
                            </div>
                            <Input placeholder="密码" type="password" ref={(input)=>this.password=input} />
                            <Link to="/"><Button onClick={()=>register(this.name,this.phone,this.password,this.msgCode)}>注册</Button></Link>
                            <p>点击 “注册” 即表示您同意并愿意遵守简书</p>
                            <p><a href="/">用户协议</a>和 <a href="/">隐私政策 。</a></p>
                            <Others>
                                <p>社交帐号直接注册</p>
                                <div>
                                    <i className="iconfont iconweixin"></i>
                                    <i className="iconfont iconqq"></i>
                                </div>
                            </Others>
                        </Toggle>

                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/"></Redirect>
        }
    }
}
const mapState=(state)=>({
    loginStatus:state.getIn(['login','login']),
    status:state.getIn(['login','status']),
    code:state.getIn(["login","code"]),
    status2:state.getIn(['login','status2']),
    register1:state.getIn(['login','register1']),
    register2:state.getIn(['login','register2']),
    loginPage:state.getIn(['login','loginPage']),
    registerPage:state.getIn(['login','registerPage'])
})
const mapDispatch = (dispatch) => ({
    login(phoneEle,msgCodeEle){
        dispatch(actionCreators.login(phoneEle.value, msgCodeEle.value));
    },
    register(nameEle,phoneEle,passwordEle,msgCodeEle){
        dispatch(actionCreators.register(nameEle.value,phoneEle.value,passwordEle.value,msgCodeEle.value))
    },
    changeInput(e){
        const value=e.target.value;
        if(value.length === 11){
            dispatch(actionCreators.changeInput("active"));
        }else{
            dispatch(actionCreators.changeInput("unable"));
        }
    },
    showCode(e){
        const value=e.target.value;
        if(value.length === 11){
            dispatch(actionCreators.showCode("show","active"));
        }else{
            dispatch(actionCreators.showCode("hide","unable"));
        }
    },
    send(phone){
        dispatch(actionCreators.send(phone.value))
    },
    changeStatus(phone){
        dispatch(actionCreators.changeStatus(phone.value));
    },
    toggleLoginPage(){
        dispatch(actionCreators.togglePage("show","hide",false,true));
    },
    toggleRegisterPage(){
        dispatch(actionCreators.togglePage("hide","show",true,false));
    },
})
export default connect(mapState,mapDispatch)(Login);