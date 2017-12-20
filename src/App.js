import React, {Component} from "react";
import Nav from "./components/Navbar";
import Items from "./components/CommentList";


class App extends Component {

  render() {
    return (
      <div className="App">

       <Nav />
          <Items/>
      </div>
    );
  }
}

export default App;
