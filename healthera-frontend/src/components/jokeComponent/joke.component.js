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
  constructor(props) {
    super(props);
    //this.state = {};
  }
  componentDidMount() {
    this.props.loadJokes();
  }

  onRemoveHandler = (joke) => {
    this.props.removeJoke(joke);
  }
  onUpdateHandler(joke) {
    this.props.updateJoke(joke);
  }
  onCreateHandler(joke) {
    this.props.createJoke(joke);
  }

  render() {
    return (<>
      {this.props.jokeReducer && this.props.jokeReducer.jokes ? <MaterialTableDemo
        jokes={this.props.jokeReducer.jokes}
        createJoke={this.onCreateHandler}
        updateJoke={this.onUpdateHandler}
        removeJoke={this.onRemoveHandler}
      /> : null}
    </>);
  }
}

const mapStateToProps = state => {
  console.log("state>>>>>>>>>>>>>>>", state)
  return { jokeReducer: state.jokeReducer };
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
