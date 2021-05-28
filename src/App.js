import Header from "./modules/components/organisms/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routes from "./modules/router/Routes";

function App() {
  return (
    <div className="appContainer">
        <Router>
            <Header
                routes={routes}
            />
            <main>
                <Switch>
                    {
                        routes.map((route, index) => <Route
                            key={index}
                            path={route.path}
                            exact
                        >
                            {route.component}
                        </Route>)
                    }
                </Switch>
            </main>
        </Router>
    </div>
  );
}

export default App;
