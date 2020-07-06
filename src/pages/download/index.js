import React,{Component} from 'react'
import {
    DownLoadWrapper,
    Title,
    Row,
    Down,
    PhotoWord,

} from './style'

class DownLoad extends Component{
    render(){
        return (
            <DownLoadWrapper>
                <Row>
                    <div className="center">
                        <Title>
                            <div><img src={require("../../img/15.png")} alt="" /></div>
                            <div className="text">
                                <h3>创作你的创作</h3>
                                <p>一个优质创作社区</p>
                            </div>
                        </Title>
                        <Down>
                            <img alt="" src={require('../../img/10.png')} className="img1" />
                            <div className="load">
                                <img alt="" src={require('../../img/16.png')} className="img2" />
                                <h3>扫码下载简书App</h3>
                                <p>随时随地发现和创作内容</p>
                            </div>
                        </Down>
                    </div>
                </Row>
                <PhotoWord>
                    <div>
                        <h3>轻松创作精美图文</h3>
                        <p>简单优雅的设计，可以一次上传多张图片、实时保存、多端同步，使创作分享更方便快捷</p>
                        
                    </div>
                    <img alt="" src={require('../../img/11.png')} />
                </PhotoWord>
            </DownLoadWrapper>
            
        )
    }
    
}
export default DownLoad