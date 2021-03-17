import React from "react";
import ReactDOM from "react-dom";
import * as AppRedux from "./redux";
import * as ReactRedux from "react-redux";
import * as Components from "./components";
import { BrowserRouter, Route, withRouter } from "react-router-dom";


function App({ history }) {
  React.useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, [])

  return (
    <>
      <Route exact path="/" component={Components.Main} />
    </>
  );
}

const AppRouter = withRouter(App);

ReactDOM.render(
  <ReactRedux.Provider store={AppRedux.store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ReactRedux.Provider>,
  document.getElementById("root")
);