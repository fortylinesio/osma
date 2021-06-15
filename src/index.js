import React from "react";
import ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import {
    BrowserRouter,
    Route,
    withRouter,
    useHistory,
} from "react-router-dom";
import { YMInitializer } from 'react-yandex-metrika';

import * as AppRedux from "./redux";
import * as Components from "./components";
import * as Pages from "./pages";

import "./index.css"

function App() {
    const history = useHistory();

    const [currentPage, setCurrentPage] = React.useState('/');

    React.useEffect(() => {
        return history.listen((location) => {
            window.scrollTo(0, 0);
            setCurrentPage(location.pathname);
        })
    }, [history])

    return (
        <div className="App">
            <Components.Navbar currentPage={currentPage}/>
            <Components.NavbarMobile/>
            <Components.Header currentPage={currentPage}/>
            <Route exact path="/" component={Pages.Main}/>
            <Route exact path="/objects" component={Pages.Objects}/>
            <Route exact path="/objects-info" component={Pages.ObjectsInfo}/>
            <Route exact path="/news" component={Pages.News}/>
            <Route exact path="/news-info" component={Pages.NewsInfo}/>
            <Route exact path="/career" component={Pages.Career}/>
            <Route exact path="/contacts" component={Pages.Contacts}/>
            <Components.Footer/>
        </div>
    );
}

const AppRouter = withRouter(App);

ReactDOM.render(
    <ReactRedux.Provider store={AppRedux.store}>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    </ReactRedux.Provider>,
    document.getElementById("root")
);
