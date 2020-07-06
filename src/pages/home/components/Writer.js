import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
    WriterWrapper,
    WriteTitle,
    WriteItem,
    WriteContent
} from '../style'

class Writer extends PureComponent{
    render(){
        const {list} =this.props;
        // const pageList=[];
        // const newList=list.toJS();
        // for(let i=(page-1)*5;i<page*5;i++){
        //     pageList.push(

        //     )
        // }
        return (
            <WriterWrapper>
                <WriteTitle>
                    <span>推荐作者</span>
                    <div className="change">
                        <i className="iconfont iconspin"></i>
                        换一批
                    </div>
                </WriteTitle>
                <WriteContent>
                    {
                        list.map((item)=>{
                            return (
                                <WriteItem>
                                    <Link to="/author">
                                        <div className="photos"  style={{ textDecoration:'none'}}>
                                            <img alt="" src={item.get("imgUrl")} className="peoplePhoto" />
                                        </div>
                                    </Link>
                                    <div className="people">
                                        <Link to="/author"><h4 className="name">{item.get("name")}</h4></Link>
                                        <p className="content">写了{item.get("look")}字，{item.get("like")}k喜欢</p>
                                    </div>
                                    <div className="focus">
                                        +关注
                                    </div>
                                </WriteItem>
                            )
                        })
                    }
                </WriteContent>
            </WriterWrapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(["home","writeList"]),
    //page:state.getIn(['home','page'])
})
// const mapDispatch=(dispatch)=>({
//     changePage(){
//         if(page<totalPage){
//             dispatch(actionCreators.changePage(page+1));
//         }else{
//             dispatch(actionCreators.changePage(1));
//         }
//     }
// })
export default connect(mapState,null)(Writer)