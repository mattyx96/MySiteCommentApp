import React from "react";
import {Card, CardTitle, CardText, Button} from "reactstrap";
import Center from "react-center";
import axios from "axios";

class CommentListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            numLikes: props.numLikes,
            comment: props.comment,
            sender: props.sender,
            liked: false
        };
        this.like = this.like.bind(this);
    }


    like() {

        if (this.state.liked) {

            axios.get(`http://matteoomicini.drink-web.eu/api/dislike/` + this.state.id)
                .then(res => {
                    let like = this.state.numLikes;
                    like--;
                    this.setState({
                        numLikes: like,
                        liked: false
                    })
                        .catch(error => {
                            console.log(error.res)
                        });
                });
        }

        if (!this.state.liked) {

            axios.get(`http://matteoomicini.drink-web.eu/api/like/` + this.state.id)
                .then(res => {
                    let like = this.state.numLikes;
                    like++;
                    this.setState({
                        numLikes: like,
                        liked: true
                    })
                        .catch(error => {
                            console.log(error.res)
                        });
                });
        }

    }

    getIcon() {

        var likeIcon = <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEuOTk3IDUxLjk5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEuOTk3IDUxLjk5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik01MS45MTEsMTYuMjQyQzUxLjE1Miw3Ljg4OCw0NS4yMzksMS44MjcsMzcuODM5LDEuODI3Yy00LjkzLDAtOS40NDQsMi42NTMtMTEuOTg0LDYuOTA1ICAgYy0yLjUxNy00LjMwNy02Ljg0Ni02LjkwNi0xMS42OTctNi45MDZjLTcuMzk5LDAtMTMuMzEzLDYuMDYxLTE0LjA3MSwxNC40MTVjLTAuMDYsMC4zNjktMC4zMDYsMi4zMTEsMC40NDIsNS40NzggICBjMS4wNzgsNC41NjgsMy41NjgsOC43MjMsNy4xOTksMTIuMDEzbDE4LjExNSwxNi40MzlsMTguNDI2LTE2LjQzOGMzLjYzMS0zLjI5MSw2LjEyMS03LjQ0NSw3LjE5OS0xMi4wMTQgICBDNTIuMjE2LDE4LjU1Myw1MS45NywxNi42MTEsNTEuOTExLDE2LjI0MnogTTQ5LjUyMSwyMS4yNjFjLTAuOTg0LDQuMTcyLTMuMjY1LDcuOTczLTYuNTksMTAuOTg1TDI1Ljg1NSw0Ny40ODFMOS4wNzIsMzIuMjUgICBjLTMuMzMxLTMuMDE4LTUuNjExLTYuODE4LTYuNTk2LTEwLjk5Yy0wLjcwOC0yLjk5Ny0wLjQxNy00LjY5LTAuNDE2LTQuNzAxbDAuMDE1LTAuMTAxQzIuNzI1LDkuMTM5LDcuODA2LDMuODI2LDE0LjE1OCwzLjgyNiAgIGM0LjY4NywwLDguODEzLDIuODgsMTAuNzcxLDcuNTE1bDAuOTIxLDIuMTgzbDAuOTIxLTIuMTgzYzEuOTI3LTQuNTY0LDYuMjcxLTcuNTE0LDExLjA2OS03LjUxNCAgIGM2LjM1MSwwLDExLjQzMyw1LjMxMywxMi4wOTYsMTIuNzI3QzQ5LjkzOCwxNi41Nyw1MC4yMjksMTguMjY0LDQ5LjUyMSwyMS4yNjF6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGNjA3MDciIGRhdGEtb2xkX2NvbG9yPSIjRjMyMTIxIj48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg=="
            style={{height: 30}}/>;


        if (this.state.liked) {
            likeIcon = <img
                src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiNENzVBNEE7IiBkPSJNMjQuODUsMTAuMTI2YzIuMDE4LTQuNzgzLDYuNjI4LTguMTI1LDExLjk5LTguMTI1YzcuMjIzLDAsMTIuNDI1LDYuMTc5LDEzLjA3OSwxMy41NDMgIGMwLDAsMC4zNTMsMS44MjgtMC40MjQsNS4xMTljLTEuMDU4LDQuNDgyLTMuNTQ1LDguNDY0LTYuODk4LDExLjUwM0wyNC44NSw0OEw3LjQwMiwzMi4xNjVjLTMuMzUzLTMuMDM4LTUuODQtNy4wMjEtNi44OTgtMTEuNTAzICBjLTAuNzc3LTMuMjkxLTAuNDI0LTUuMTE5LTAuNDI0LTUuMTE5QzAuNzM0LDguMTc5LDUuOTM2LDIsMTMuMTU5LDJDMTguNTIyLDIsMjIuODMyLDUuMzQzLDI0Ljg1LDEwLjEyNnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                style={{height: 30}}/>
        }

        return likeIcon
    }

    render() {


        return (
            <div>
                <Card body>
                    <Center> <CardTitle>{this.state.sender}</CardTitle> </Center>
                    <CardText>{this.state.comment}</CardText>
                </Card>
                <Center>
                    <Button id="like-button" onClick={() => {
                        this.like()
                    }} style={{textAlign: 'center'}}> {this.getIcon()}
                        <div id="like"> like: {this.state.numLikes} </div>
                    </Button>
                </Center>
            </div>
        );
    }
}

export default CommentListItem;