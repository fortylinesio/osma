import React from "react";
import ReactDOM from "react-dom";
import * as AppRedux from "./redux";
import * as ReactRedux from "react-redux";
import * as Components from "./components";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./index.css"


function App({ history }) {
  React.useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, [])

  return (
    <div className="App">
      <Route exact path="/" component={Components.Main} />
      <Route exact path="/object-page" component={Components.ObjectsPage} />
      <Route exact path="/object-info-page" component={Components.ObjectsInfoPage} />
      <Route exact path="/career-page" component={Components.CareerPage} />
      <Route exact path="/contacts" component={Components.Contacts} />
      <Route exact path="/contacts-page" component={Components.ContactsPage} />
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