import React from 'react';

class VideoPlayer extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    componentDidUpdate(props){
        console.log(props);
    }
    ShouldComponentUpdate(){
        return true;
    }
    render(){
       return  <div>
            <video width={this.props.width} height={this.props.height} controls>
            <source src={this.props.videoSrc} type="video/mp4" />
           {/*  <source src="/client/app/assets/videos/1.mp4" type="video/mp4" />*/}
            Your browser does not support the video tag.
            </video>
        </div>
    }
}

export default VideoPlayer;