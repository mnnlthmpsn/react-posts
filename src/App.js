import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages";
import PostDetail from "./pages/post-detail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={PostDetail} />
      </Switch>
    </Router>
  );
};

export default App;
