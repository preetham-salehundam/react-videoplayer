import React from 'react';
import {render} from 'react-dom';
import VideoPlayer from './components/video.component.jsx';
import GalleryComponent from './components/gallery.component.jsx';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={'selectedFile':""};
        this.loadFile = this.loadFile.bind(this);
       
    }
    loadFile(file){
        this.setState({'selectedFile':file.name});
    }
    render(){
        let videoUrl = `/client/app/assets/videos/`+this.state.selectedFile+'?time='+Date.now();
        return <div><h1 className="Heading">Gallery</h1>
                <GalleryComponent loadFile={this.loadFile}/>
                <VideoPlayer width="320" height="240" videoSrc={videoUrl}/>
        </div>
    }
}
render(<App/>,document.getElementById('app'));