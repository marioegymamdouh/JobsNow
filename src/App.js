import Header from "./modules/components/organisms/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routes from "./modules/Router/Routes";

function App() {
  return (
    <div className="appContainer">
        <Router>
            <Header
                routes={routes}
            />

            <Switch>
                {
                    routes.map(route => <Route
                        path={route.path}
                        exact
                    >
                        {route.component}
                    </Route>)
                }
            </Switch>
        </Router>
    </div>
  );
}

export default App;
