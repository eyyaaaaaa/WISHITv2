import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import SignInScreen from "./components/screens/SignInScreen";
import SignUpScreen from "./components/screens/SignUpScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/Signin" component={SignInScreen} />
          <Route exact path="/Signup" component={SignUpScreen} />
          <Route exact path="/ForgotPassword" component={ForgotPasswordScreen}/>
          <Route exact path="/Passwordreset/:resetToken" component={ResetPasswordScreen}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;