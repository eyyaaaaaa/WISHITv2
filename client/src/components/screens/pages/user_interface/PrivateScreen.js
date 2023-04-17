import Home from "./home/Home";
import {
  Route,
  Switch,
} from "react-router-dom";
import Profile from "./profile/Profile";
import UserProf from "./profile/UserProf";
import List from "./List/List";
import NewPost from "./NewPost/NewPost";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./PrivateScreen.scss";
import FriendsList from "./friendsList/FriendsList";



function App() {


  const Layout = ({ children, history }) => {
    const { pathname } = useLocation();
    const { darkMode } = useContext(DarkModeContext);

  
  
  

  
    return  (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Topbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 5 }}>{children}</div>
          {pathname !== "/list" && pathname !== "/newpost" && <Rightbar />}
        </div>
      </div>
    );
  };

  return (
    <div>

        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <UserProf />
            </Route>
            <Route exact path="/profile/:id">
              <Profile />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/newpost">
              <NewPost />
            </Route>
            <Route path="/friendsList">
              <FriendsList />
            </Route>
          </Switch>
        </Layout>
    </div>
  );
}

export default App;






