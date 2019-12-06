import React, { Component } from "react";
import { connect } from "react-redux";
import { addCardInState } from "../../actions/retro";
import { updateUser, userDone } from "../../actions/user";
import Retro from "./Retro";
import Loader from "../Loader/Loader";
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
        <RoomHeader retro={this.props.retro} users={this.props.users} />
        {/* <div className="room-header">
          <div className="user-area">
            <h2>Project title</h2>
            <div style={{ margin: "20px" }}>{this.props.retro.description}</div>
          </div>
          <div className="room-header-text">
            <h2>
              Welcome to room: <i>{this.props.retro.name}</i>
            </h2>

            <div className="explanation-text">
              {" "}
              Share your experiences of the project you have just completed.
              What happend that made you <strong>mad</strong>,{" "}
              <strong>sad</strong> or <strong>glad</strong>? You can enter
              multiple items. For example, maybe two things made you glad but
              only one thing made you sad. When you are done filling in the
              items, share and discuss them with your teammates.
            </div>
          </div>
          {!this.props.retro && <Loader />}

          {this.props.retro && this.props.users && (
            <div className="user-area">
              <h2>Contributors</h2>
              <div style={{ margin: "20px", textAlign: "left" }}>
                {this.props.users.map(user => (
                  <p>• {user.username}</p>
                ))}
              </div>
            </div>
          )}
        </div> */}
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
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const retroId = parseFloat(ownProps.match.params.id);

  const retro = state.lobby.find(retro => retro.id === retroId);
  console.log("retro: ", retro);
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
