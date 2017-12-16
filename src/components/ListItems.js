import React, { Component } from 'react';
import Item from './CommentListItem';




class ListItems extends Component {


    demonio(itemArray) {

        // var items = {
        //     id: [1, 2, 3, 4, 5, 6],
        //     sender: ["io", "lui", "lei", "egli", "tu", "esso"],
        //     comment: ["ciao", "ciao2", "ciao3", "ciao4", "ciao5", "ciao6"],
        //     numLikes: [11, 22, 33, 44, 55, 66]
        // };


        var items = [
            {id:1, sender:"io", comment:"ciao", numLikes:"11"},
            {id:2, sender:"tu", comment:"ciao1", numLikes:"22"},
            {id:3, sender:"lui", comment:"ciao2", numLikes:"33"},
            {id:4, sender:"lei", comment:"ciao3", numLikes:"44"}
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

        return (items.map(function(object,index){
                return  <Item numLikes={object.numLikes} id={object.id} comment={object.comment} sender={object.sender}/>
            }));
    }



    render() {
        return (
            <div className="App">
                {this.demonio()}
            </div>
        );
    }
}

export default ListItems;