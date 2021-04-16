
import React from "react";
import ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import {
  BrowserRouter,
  Route,
  withRouter,
} from "react-router-dom";

import * as AppRedux from "./redux";
import * as Components from "./components";
import * as Pages from "./pages";

import "./index.css"

function App({ history }) {
  React.useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Components.Navbar />
      <Components.Header />
      <Route exact path="/" component={Pages.Main} />
      <Route exact path="/objects" component={Pages.Objects} />
      <Route exact path="/objects/:id" component={Pages.ObjectsInfo} />
      <Route exact path="/news" component={Pages.News} />
      <Route exact path="/career-page" component={Pages.Career} />
      <Route exact path="/contacts" component={Pages.Contacts} />
      <Components.Footer />
    </div>
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
