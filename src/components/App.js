import React, {PropTypes} from "react";
//import Nav from "./common/Nav";
import {connect} from "react-redux";
import Nav from "./Nav";

//this is called by routes.js
//this.props.children is defined in routes.js as
//ChampionsPage and items
class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
