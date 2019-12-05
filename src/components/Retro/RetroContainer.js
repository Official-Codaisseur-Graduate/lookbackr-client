import React, { Component } from "react";
import { connect } from "react-redux";
import { addCardInState } from "../../actions/retro";
import { updateUser, userDone } from "../../actions/user";
import Retro from "./Retro";
import Loader from "../Loader/Loader";
import CardForm from "./CardForm";
import MadSadGladContent from "./MadSadGladContent";
import { Link } from "react-router-dom";
import "./Retro.css";

class RetroContainer extends Component {
  id = this.props.match.params.id;

  state = {
    type: "",
    text: "",
    visibilityForm: false,
    message_submit: "2 - Share your cards"
  };

  componentDidMount() {
    const userId = this.props.currentUser.userId;
    this.props.updateUser(userId, parseInt(this.id));
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const userId = this.props.currentUser.userId;
    this.props.addCardInState(
      this.state,
      userId,
      this.id,
      this.props.userCards
    );
    this.setState({
      type: "",
      text: ""
    });
  };

  submitChanges = () => {
    this.props.userDone(this.props.currentUser.userId, parseInt(this.id));
    this.setState({
      message_submit: "waiting for the next user..."
    });
  };

  toggleVisibility = () => {
    if (this.state.visibilityForm === true) {
      return this.setState({
        visibilityForm: false
      });
    } else {
      return this.setState({
        visibilityForm: true
      });
    }
  };

  joinedUser = "Joined: ";
  optionsCards = ["mad", "sad", "glad"];
  optionsCard2 = ["stop", "start", "keep"];

  render() {
    return (
      <div className="container">
        <div className="explanation-text">
          {" "}
          You can fill in you experiences during the project. What happend that
          made you mad, sad or glad? You can enter multiple items. For example,
          two things made you glad but only one thing made you sad. When you are
          done filling in the items, discuss them with your teammates.
        </div>

        {!this.props.retro && <Loader />}

        {this.props.retro && this.props.users && (
          <div className="user-area">
            <div className="description">
              <p>{this.props.retro.description}</p>
              {this.joinedUser}
              {this.props.users.map(user => user.username + ", ")}
            </div>
          </div>
        )}
        <MadSadGladContent />

        {this.props.cards && (
          <Retro cards={this.props.cards} users={this.props.users} />
        )}

        {!this.props.done && (
          <div>
            <div id="createCardFormContainer">
              <CardForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                options={this.optionsCards}
                visibilityForm={this.state.visibilityForm}
                toggleVisibility={this.toggleVisibility}
              />
            </div>
            <button className="button" onClick={this.submitChanges}>
              {this.state.message_submit}
            </button>
          </div>
        )}
        <Link to={`/retrospectives/${this.id}/next`} className="button next">
          3 - Go to the next phase
        </Link>
        {this.props.done && <div></div>}
        <div className="go-back">
          <Link to={"/user"}>
            <button className="button" style={{ marginTop: "20px" }}>
              Go back
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const retroId = parseFloat(ownProps.match.params.id);

  const retro = state.lobby.find(retro => retro.id === retroId);

  const userCards = retro.cards.filter(
    card => card.userId === state.user.userId
  );

  const cards = retro.done ? retro.cards : userCards;

  return {
    done: retro.done,
    retro,
    cards,
    users: retro.users,
    currentUser: state.user
  };
};

export default connect(mapStateToProps, {
  addCardInState,
  updateUser,
  userDone
})(RetroContainer);
