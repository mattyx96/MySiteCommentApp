import React from 'react'
import {ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button} from 'reactstrap';

class CommentListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            numLikes: props.numLikes
        };
    }

    render() {

        return (
            <ListGroupItem active>
                <ListGroupItemHeading>{this.props.sender}</ListGroupItemHeading>
                <ListGroupItemText>
                    {this.props.comment}
                </ListGroupItemText>
                <Button>{this.state.numLikes}</Button>
            </ListGroupItem>
        );
    }
}

export default CommentListItem;