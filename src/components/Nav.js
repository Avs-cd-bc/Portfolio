import {bindActionCreators} from "redux";
import React, {PropTYpes} from "react";
import {Link, IndexLink} from "react-router";
import {connect} from "react-redux";

class Nav extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div id="topNav">
        <IndexLink to="/">Home</IndexLink>
        <Link to ="/projects">My Projects</Link>
        <Link to = "/sources">Sources</Link>
      </div>
    );
  }
}

export default connect()(Nav);
