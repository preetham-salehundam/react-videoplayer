import React from 'react';

class GalleryComponent extends React.Component{
    constructor(props){
        super(props);
        this.videoLib = ["1.mp4","2.mp4","3.mp4"];
        this.state={videoList:this.videoLib}
        this.renderVideoList = this.renderVideoList.bind(this);
        this.getFileList = this.getFileList.bind(this);
    }
    renderVideoList(){
        return this.state.videoList.map((video,index)=> <li key={index}>{video}</li>);
    }
    componentDidMount(props){
        console.log(props);
       /* return new Promise((resolve,reject)=>{
            let req = new XMLHttpRequest();
            req.open('GET','',true);
            req.onload=()=>{
                return resolve(req.response);
            }
            req.onerror = ()=>{
                return reject(req.error);
            }

        })*/
    }
    render(){
        return  <ul>
            {this.renderVideoList()}
        </ul>
    }
}
export default GalleryComponent;