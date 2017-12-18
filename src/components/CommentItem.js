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
            sender: props.sender,
        };
        this.incrementLike = this.incrementLike.bind(this);
    }


    incrementLike(){
        let like = this.state.numLikes;
        like++;
        this.setState({numLikes: like});
    }

    render() {

        return (
            <Card body>
                <CardTitle>{this.state.sender}</CardTitle>
                <CardText>{this.state.comment}</CardText>
                <Button outline color="info" onClick={() => {this.incrementLike()}}>like: {this.state.numLikes}</Button>
            </Card>
        );
    }
}

export default CommentListItem;