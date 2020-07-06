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
    AuthorItem
}from './style'
class Author extends Component{
    add2(){
        const { authorList }  = this.props;
        console.log("aaa");
        console.log(authorList)
        // authorList.map((item)=>{
        //     return (<AuthorItem key={item.get("id")}>
        //             <span>{item.get("number")}</span>
        //             <div>关注></div>
        //         </AuthorItem>)
        // })
    }
    render(){
        const { authorList }  = this.props;
        console.log(authorList);
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
                                        authorList && authorList.map((item)=>{
                                            return (<AuthorItem key={item.get("id")}>
                                                    <span>{item.get("number")}</span>
                                                    <div>关注></div>
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