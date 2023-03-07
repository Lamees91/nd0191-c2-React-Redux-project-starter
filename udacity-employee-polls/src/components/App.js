import { handleInitialData } from "../actions/shared";
import { useEffect } from "react";
import { connect } from "react-redux";
function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return <div className="App">New App</div>;
}

export default connect()(App);
