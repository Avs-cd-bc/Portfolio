import {bindActionCreators} from "redux";
import React, {PropTypes} from "react";
import {connect} from "react-redux";

class ProjectsPage extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <div>
        <p> Check out my other Projects! </p>
        <ul>
          <li>
            <form action="http://leaguereact-env-avs.us-west-2.elasticbeanstalk.com/">
              <button>My League and React Site!</button>
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(ProjectsPage);
