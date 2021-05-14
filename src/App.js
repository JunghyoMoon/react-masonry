import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "./routes/Main";
import Details from "./routes/Details";
import "./styles.css";

function App() {
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Main} />
            <Route path="/photo-detail" component={Details} />
        </HashRouter>
    );
}

export default App;
