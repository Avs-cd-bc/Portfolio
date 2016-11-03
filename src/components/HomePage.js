import {bindActionCreators} from "redux";
import React, {PropTypes} from "react";
import {connect} from "react-redux";

class HomePage extends React.Component{
  constructor(props){
    super();
  }

  render(){
    console.log("HomePage is being called");
    return(
      <div>Home Page</div>
    );
  }
}

export default connect()(HomePage);
