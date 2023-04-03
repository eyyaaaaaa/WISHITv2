import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
/*import Auth from "./components/screens/pages/auth/Auth";*/
import SignInScreen from "./components/screens/pages/auth/SignInScreen";
import SignUpScreen from "./components/screens/pages/auth/SignUpScreen";
import ForgotPasswordScreen from "./components/screens/pages/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/pages/auth/ResetPasswordScreen";
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