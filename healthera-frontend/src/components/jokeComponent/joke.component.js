import React from "react";
import { connect } from "react-redux";
//import JokeList from "../jokeListComponent/JokeList.component";
import MaterialTableDemo from "../jokeListComponent/JokeList.component";
import {
  loadJokes,
  createJoke,
  updateJoke,
  removeJoke
} from "../../redux/action/jokeAction";

class JokeComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  componentDidMount() {
    this.props.loadJokes();
  }

  render()   
  {
   return(<>
   {this.props.jokeReducer && this.props.jokeReducer.jokes ?<MaterialTableDemo
   props={this.props.jokeReducer.jokes}
   />:null}
   </>);
  }
}

const mapStateToProps = state => {
  return { ...state};
};

const mapDispatchToProps = {
  loadJokes,
  createJoke,
  updateJoke,
  removeJoke
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JokeComponent);
