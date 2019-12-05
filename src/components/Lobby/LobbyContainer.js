import React, { Component } from "react";
import { connect } from "react-redux";
import Lobby from "./Lobby";
import { createRoom } from "../../actions/createRoom";
import { deleteRoom } from "../../actions/lobby";

class LobbyContainer extends Component {
  state = {
    editMode: false,
    name: "",
    description: "",
    visibilityForm: false,
    active: true
  };

  onSubmit = event => {
    event.preventDefault();
    const { name, description, active } = this.state;
    this.props.createRoom(name, description, active);
    this.setState({
      name: "",
      description: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onAdd = () => {
    this.setState({
      editMode: true,
      visibilityForm: true
    });
  };
  onClickDelete = event => () => {
    this.props.deleteRoom(event);
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

  render() {
    return (
      <div>
        <div className="container">
          <Lobby
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            onAdd={this.onAdd}
            lobby={this.props.lobby}
            onClickDelete={this.onClickDelete}
            visibilityForm={this.state.visibilityForm}
            toggleVisibility={this.toggleVisibility}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  lobby: state.lobby
});

export default connect(mapStateToProps, { createRoom, deleteRoom })(
  LobbyContainer
);
