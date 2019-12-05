import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import LobbyContainer from "./Lobby/LobbyContainer";
import UserFormContainer from "./User/UserFormContainer";
import RetroContainer from "./Retro/RetroContainer";
import RetroNextContainer from "./Retro/RetroNextContainer";

function Routes(props) {
  return (
    <div>
      {!props.userJwt && (
        <Switch>
          <Route path="/user" component={UserFormContainer} />
          <Route path="" render={() => <Redirect to="/user" />} />
        </Switch>
      )}

      {props.userJwt && (
        <Switch>
          <Route path="/retrospectives" exact component={LobbyContainer} />
          <Route path="/retrospectives/:id" exact component={RetroContainer} />
          <Route
            path="/retrospectives/:id/next"
            exact
            component={RetroNextContainer}
          />
          <Route path="" render={() => <Redirect to="/retrospectives" />} />
        </Switch>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  user: !!state.user.id,
  userJwt: state.user.jwt,
  error: state.error
});

export default withRouter(connect(mapStateToProps)(Routes));
