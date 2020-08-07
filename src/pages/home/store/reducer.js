import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    mouseIn2:false,
    writeList:[],
    list:[],
    articlePage:1,
    showScroll:false,
    // page:1,
    // totalPage:1
})
//#region
// const defaultState=fromJS({
//     topicList:[{
//         id:1,
//         title:'社会热点',
//         imgURL:require("../../../img/1.jpg")
//     },{
//         id:2,
//         title:'手绘',
//         imgURL:require("../../../img/2.jpg")
//     },{
//         id:3,
//         title:'社会热点',
//         imgURL:require("../../../img/2.jpg")
//     },{
//         id:4,
//         title:'手绘',
//         imgURL:require("../../../img/2.jpg")
//     },{
//         id:5,
//         title:'社会热点',
//         imgURL:require("../../../img/2.jpg")
//     },{
//         id:6,
//         title:'手绘',
//         imgURL:require("../../../img/2.jpg")
//     }],
//     articleList:[{
//         id:1,
//         title:'标题1',
//         content:'据央视新闻，当地时间6月9日，美国有线电视新闻网报道称，美国国务院拟在6月22日左右重启美国驻武汉总领馆，目前国务院已通告国会。',
//         imgURL:require("../../../img/3.jpg"),
//         read:12,
//         name:'涛史观',
//         discuss:23,
//         like:44
//     },{
//         id:2,
//         title:'标题2',
//         content:'此前，美国驻武汉总领事馆于1月24日在微博上宣布暂停运营。',
//         imgURL:require("../../../img/4.jpg"),
//         read:12,
//         name:'涛史观',
//         discuss:23,
//         like:44
//     },{
//         id:3,
//         title:'标题3',
//         content:'特别声明：以上内容(如有图片或视频亦包括在内)为自媒体平台“网易号”用户上传并发布，本平台仅提供信息存储服务。',
//         imgURL:require("../../../img/5.jpg"),
//         read:12,
//         name:'涛史观',
//         discuss:23,
//         like:44
//     },{
//         id:4,
//         title:'标题4',
//         content:'6月9日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例3例，均为境外输入病例（内蒙古2例，天津1例）；无新增死亡病例；新增疑似病例1例，为境外输入病例（上海1例）',
//         imgURL:require("../../../img/6.jpg"),
//         read:12,
//         name:'涛史观',
//         discuss:23,
//         like:44
//     }],
//     recommendList:[{
//         id:1,
//         imgUrl:require("../../../img/1.png")
//     },{
//         id:2,
//         imgUrl:require("../../../img/2.png")
//     },{
//         id:3,
//         imgUrl:require("../../../img/3.png")
//     },{
//         id:4,
//         imgUrl:require("../../../img/4.png")
//     }],
//     mouseIn2:false,
//     writeList:[{
//         id:1,
//         imgUrl:require("../../../img/5.png"),
//         name:'梅拾璎',
//         look:269.2,
//         like:30.8
//     },{
//         id:2,
//         imgUrl:require("../../../img/6.png"),
//         name:'吴晓布',
//         look:793.9,
//         like:25
//     },{
//         id:3,
//         imgUrl:require("../../../img/7.png"),
//         name:'卢璐说',
//         look:1589.8,
//         like:32.6
//     },{
//         id:4,
//         imgUrl:require("../../../img/8.png"),
//         name:'格列柯南',
//         look:786.2,
//         like:44.2
//     },{
//         id:5,
//         imgUrl:require("../../../img/9.png"),
//         name:'念远怀人',
//         look:680.7,
//         like:14
//     }]
// })
//#endregion
const changeHomeData=(state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        mouseIn2:fromJS(action.mouseIn2),
        writeList:fromJS(action.writeList)
    }) 
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.MOUSE_ENTER_TWO : 
            return state.set('mouseIn2',true);
        case constants.MOUSE_LEAVE_TWO : 
            return state.set('mouseIn2',false);
        case constants.CHANGE_HOME_DATA : 
            return changeHomeData(state,action);
        case constants.ADD_ARTICLE_LIST : 
            return state.merge({
                "articleList":state.get("articleList").concat(action.list),
                "articlePage":action.nextPage
            })
        case constants.TOGGLE_TOP_SHOW : 
            return state.set('showScroll',action.show)
        default : 
            return state;
    }
}