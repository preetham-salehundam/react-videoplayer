import React from 'react';

class VideoPlayer extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
       return  <div>
            <video width={this.props.width} height={this.props.height} controls>
            <source src={this.props.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    }
}

export default VideoPlayer;