import React, { Component } from "react";
import { connect } from "react-redux";
import { addCardInState } from "../../actions/retro";
import Retro from "./Retro";
import { userDone, userRestart } from "../../actions/user";
import Retro2 from "./Retro2";
import Loader from "../Loader/Loader";
import CardForm from "./CardForm";
import MadSadGladContent from "./MadSadGladContent";
import StopStartKeepContent from "./StopStartKeepContent";
import { deleteCard } from "../../actions/lobby";

class RetroNextContainer extends Component {
  id = this.props.match.params.id;

  state = {
    type: "",
    text: "",
    visibilityForm: false,
    message_submit: "share your cards"
  };

  componentDidMount() {
    this.props.userRestart(this.props.currentUser.userId, parseInt(this.id));
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
  cardDelete = (cardId, lobbyId) => () => {
    this.props.deleteCard(cardId, lobbyId);
  };

  optionsCards = ["mad", "sad", "glad"];
  optionsCard2 = ["stop", "start", "keep"];

  render() {
    return (
      <div className="container">
        {!this.props.retro && <Loader />}

        {this.props.retro && this.props.users && (
          <div className="user-area">
            <div className="description">
              <p>{this.props.retro.description}</p>
              {this.props.users.map(user => user.username + " ")}
            </div>
          </div>
        )}
        {console.log("in next,cards: ", this.props.cards, this.props.users)}
        {this.props.cards && (
          <div>
            <MadSadGladContent />
            <Retro
              cards={this.props.retro.cards}
              users={this.props.users}
              cardDelete={this.cardDelete}
              lobbyId={this.id}
            />
            <StopStartKeepContent />
            <Retro2
              cards={this.props.cards}
              users={this.props.users}
              cardDelete={this.cardDelete}
              lobbyId={this.id}
            />
          </div>
        )}

        {!this.props.done && (
          <div>
            <button className="button" onClick={this.submitChanges}>
              {this.state.message_submit}
            </button>
            <div id="createCardFormContainer">
              <CardForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                options={this.optionsCard2}
                visibilityForm={this.state.visibilityForm}
                toggleVisibility={this.toggleVisibility}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
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
}

export default connect(mapStateToProps, {
  addCardInState,
  userDone,
  userRestart,
  deleteCard
})(RetroNextContainer);
