import Home from "./pages/Home";
import GlobalStyles from "./componenets/GlobalStyles";
import { Route } from "react-router-dom";
import Nav from "./componenets/Nav";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
