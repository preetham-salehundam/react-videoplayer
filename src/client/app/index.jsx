import React from 'react';
import {render} from 'react-dom';
import VideoPlayer from './components/video.component.jsx';
import GalleryComponent from './components/gallery.component.jsx';
class App extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return <div><h1 className="Heading">Gallery</h1>
                <GalleryComponent />
                <VideoPlayer width="320" height="240" videoSrc="videos/small.mp4"/>
        </div>
    }
}
render(<App/>,document.getElementById('app'));