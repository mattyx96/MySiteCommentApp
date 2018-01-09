import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import Item from "./CommentItem";
import axios from "axios";
import {EventEmitter} from "fbemitter";

const SORT_BY_DATE = 0;
const SORT_BY_LIKES = 1;

class ListItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            comments_unsorted: []
        };

        //this.emitter = new EventEmitter();
        //this.emitter.addListner("sort-by-date", this.sortBy(SORT_BY_DATE));
    }

    sortBy(int) {

        if (!int) {
            int = SORT_BY_LIKES;
        }

        switch (int) {
            case SORT_BY_LIKES:
                this.state.comments.sort(function (a, b) {
                    return parseInt(a.numLikes) - parseInt(b.numLikes);
                });
                break;
            case SORT_BY_DATE:
                this.setState({comments: this.state.comments_unsorted});
                break;
        }
    }


    getComments() {

        return (this.state.comments.map(function (object) {

            return <Item numLikes={object.num_like} id={object.id} comment={object.comment} sender={object.sender}/>
        }));
    }

    componentDidMount() {
        axios.get(`http://matteoomicini.drink-web.eu/api/get_all_comments`)
            .then(res => {
                this.setState({comments: res.data});
                this.setState({comments_unsorted: res.data});
            });
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col lg={2} md={1} xs={0}/>
                    <Col lg={8} md={10} xs={12}>
                        {this.getComments()}
                    </Col>
                    <Col lg={2} md={16} xs={0}/>
                </Row>
            </Container>
        );
    }
}

export default ListItems;