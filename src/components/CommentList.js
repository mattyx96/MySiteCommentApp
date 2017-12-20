import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import Item from "./CommentItem";


class ListItems extends Component {


    getComments() {

        // var items = {
        //     id: [1, 2, 3, 4, 5, 6],
        //     sender: ["io", "lui", "lei", "egli", "tu", "esso"],
        //     comment: ["ciao", "ciao2", "ciao3", "ciao4", "ciao5", "ciao6"],
        //     numLikes: [11, 22, 33, 44, 55, 66]
        // };


        const items = [
            {
                id: 1,
                sender: "io",
                comment: "Lorem ipsum dolor sit amet, cum esse exerci conclusionemque et, te pro menandri ullamcorper. Vix no latine delenit, equidem nostrum splendide te eos, sea at dicta postea sententiae. Agam possit mei in, ne audire expetendis duo. His te primis dicunt voluptaria. Utinam nostrum pri ut, verear integre vim at.Atqui graeco diceret at eos, aperiri legimus interesset mel at, ad has corrumpit vituperata scripserit. Eos labores perfecto reformidans an, mea ex alii solum iudicabit. Per labores consulatu ei, vim id eruditi dolores cotidieque. Quod vero at per. Usu illum mentitum offendit ex, fabellas postulant cu mei.",
                numLikes: "11"
            },
            {
                id: 2,
                sender: "tu",
                comment: "Lorem ipsum dolor sit amet, cum esse exerci conclusionemque et, te pro menandri ullamcorper. Vix no latine delenit, equidem nostrum splendide te eos, sea at dicta postea sententiae. Agam possit mei in, ne audire expetendis duo. His te primis dicunt voluptaria",
                numLikes: "22"
            },
            {
                id: 3,
                sender: "lui",
                comment: "Lorem ipsum dolor sit amet, cum esse exerci conclusionemque et, te pro menandri ullamcorper. Vix no latine delenit, equidem nostrum splendide te eos, sea at dicta postea sententiae. Agam possit mei in, ne audire expetendis duo. His te primis dicunt voluptaria",
                numLikes: "33"
            },
            {
                id: 4,
                sender: "lei",
                comment: "Lorem ipsum dolor sit amet, cum esse exerci conclusionemque et, te pro menandri ullamcorper. Vix no latine delenit, equidem nostrum splendide te eos, sea at dicta postea sententiae.",
                numLikes: "44"
            }
        ];

        // Object.keys(items).map(function(key){
        //     console.log("numlikes="+ items.numLikes[key] + "id=" + items.id[key] + "key=" + key);
        //     return key.map(function (value) {
        //         console.log("numlikes="+ items.numLikes[value] + "id=" + items.id[value] + "key=" + value);
        //         return <Item numLikes={items.numLikes[key]} id={items.id[key]} comment={items.comment[key]} sender={items.sender[key]}/>
        //     })
        // });

        // Object.keys(items).map(function (key) {
        //
        //     return Object.keys(key).map(function (value) {
        //
        //         console.log("numlikes="+ items.numLikes[value] + "id=" + items.id[value] + "key=" + value);
        //         return <Item numLikes={items.numLikes[value]} id={items.id[value]} comment={items.comment[value]}
        //                      sender={items.sender[value]}/>
        //     })
        // });

        return (items.map(function (object) {
            return <Item numLikes={object.numLikes} id={object.id} comment={object.comment} sender={object.sender}/>
        }));
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