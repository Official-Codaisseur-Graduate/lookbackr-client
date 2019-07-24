import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import LobbyContainer from "./Lobby/LobbyContainer";
import UserFormContainer from "./User/UserFormContainer";

function Routes(props) {
  return (
    <div>
      {!props.user && (
        <Switch>
          <Route path="/user" component={UserFormContainer} />
          <Route path="" render={() => <Redirect to="/user" />} />
        </Switch>
      )}

      {props.user && (
        <Switch>
          <Route path="/retrospectives" exact component={LobbyContainer} />
          <Route path="" render={() => <Redirect to="/retrospectives" />} />
        </Switch>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  user: !!state.user
});

export default withRouter(connect(mapStateToProps)(Routes));
