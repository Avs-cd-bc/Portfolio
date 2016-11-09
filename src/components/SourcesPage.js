import {bindActionCreators} from "redux";
import React, {PropTypes} from "react";
import {connect} from "react-redux";

class SourcesPage extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <div>
        <p> Check out my Github! </p>
        <ul>
          <li>
            <form action="https://github.com/AvsCode">
              <button>My Github</button>
            </form>
          </li>
          <li>
            <form action="https://github.com/AvsCode/Portfolio">
              <button>My Portfolio Repository</button>
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(SourcesPage);
