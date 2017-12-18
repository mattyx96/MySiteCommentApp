import React from 'react'
import {Card, CardTitle, CardText, Button} from 'reactstrap';
import '../assets/css/commentItem.css';

class CommentListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            numLikes: props.numLikes,
            comment: props.comment,
            sender: props.sender
        };
    }



    render() {

        function incrementLike(){
            let likes = this.state.likes;
            likes++;
            this.setState({numLikes: likes});
        }

        return (
            <Card body>
                <CardTitle>{this.state.sender}</CardTitle>
                <CardText>{this.state.comment}</CardText>
                <Button outline color="info" onClick={() => {incrementLike()}}>like: {this.state.numLikes}</Button>
            </Card>
        );
    }
}

export default CommentListItem;