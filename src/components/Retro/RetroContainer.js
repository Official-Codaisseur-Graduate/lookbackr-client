import React, { Component } from "react";
import { connect } from "react-redux";
import { addCardInState } from "../../actions/retro";
import { updateUser, userDone } from "../../actions/user";
import Retro from "./Retro";
import RoomHeader from "./RoomHeader";
import CardForm from "./CardForm";
import MadSadGladContent from "./MadSadGladContent";
import { Link } from "react-router-dom";

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
    console.log("roomId:", this.id);
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
    // console.log("what are users", users);
    return (
      <div className="container">
        <RoomHeader retro={this.props.retro} users={this.props.users} />

        <MadSadGladContent />

        {this.props.cards && this.props.users.length > 0 && (
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
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const retroId = parseFloat(ownProps.match.params.id);

  const retro = state.lobby.find(retro => retro.id === retroId);
  // console.log("retro: ", retro);
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
