import { Route } from "react-router-dom";
import routes from "./routes";
import Layout from "./layout/layout";
import { Switch } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Layout>
  );
}

export default App;
