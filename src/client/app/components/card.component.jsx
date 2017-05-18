 import React from 'react';
//import { Col, Card } from 'react-materialize';
/*import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';*/


 class ThumbnailCard extends React.Component{
     constructor(props){
         super(props);
         this.handleClick = this.handleClick.bind(this);
     }
     handleClick(event){
        this.props.selectItem(this.props.file);
     }
     render(){
       return(
  <div>         
  <img height={this.props.thumbHeight} width={this.props.thumbWidth} src={`${this.props.imageurl}`} alt={this.props.file.name} onClick={this.handleClick} />
  <span>{this.props.file.name}</span>
  </div>
  
  )
        /* <Col m={1} s={1} >
                <Card className='blue-grey darken-1' textClassName='white-text' title={this.props.file.name} actions={[<a href='#'>This is a link</a>]}>
                    <img height={this.props.thumbHeight} width={this.props.thumbWidth} src={`${this.props.imageurl}`} alt={this.props.file.name} />
                </Card>
            </Col>*/
            
     }
 }

 export default ThumbnailCard;
