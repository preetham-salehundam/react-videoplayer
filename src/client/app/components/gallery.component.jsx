import React from 'react';

import ThumbnailCard from './card.component.jsx'

class GalleryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.videoLib = [{"name":"1.mp4"},{"name": "2.mp4"},{"name": "3.mp4"}];
        this.state = { videoList: this.videoLib }
        this.renderVideoList = this.renderVideoList.bind(this);
        this.selectItem = this.selectItem.bind(this);
        // this.getFileList = this.getFileList.bind(this);
    }
     selectItem(file) {
        this.props.loadFile(file);
    }
    renderVideoList() {
        return this.state.videoList.map((file, index) => {
        let filename = file.name.substr(0,file.name.lastIndexOf('.'));
        let thumbnails = `${filename}.jpg`;
            return (<li  key={index}>
                
            <ThumbnailCard thumbHeight="100" thumbWidth="100" imageurl={`/client/app/assets/videos/thumbnails/${thumbnails}`} file={file} selectItem={this.selectItem}/>
                {/*{video}*/}
            </li>)
        });
    }   
   
    componentDidMount(props) {
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
    render() {
        return <ul>
            
            {this.renderVideoList()}
        </ul>
    }
}
export default GalleryComponent;