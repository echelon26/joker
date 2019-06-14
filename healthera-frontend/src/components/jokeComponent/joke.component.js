import React from "react";
import { connect } from "react-redux";
import JokeList from "../jokeListComponent/JokeList.component";
import {
  loadJokes,
  createJoke,
  updateJoke,
  removeJoke
} from "../../redux/action/jokeAction";

class JokeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //
    this.props.loadJokes();
  }

  render() {
    return (
      <>
        <JokeList />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.jokeReducer);
  return { jokes: state.jokeReducer };
};

const mapDispatchToProps = {
  loadJokes,
  createJoke,
  updateJoke,
  removeJoke
};

// function mapDispatchToProps(dispatch) {
//   return {
//     loadJokes: bindActionCreators(loadJokes, dispatch)
//   };
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JokeComponent);
