import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
