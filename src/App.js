import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ROUTES } from './Common/constant';
import Dashboard from "./Component/Dashboard/index";
import Client from "./Component/Client/index";
import Recruiter from "./Component/Recruiter/index";
import Profile from "./Component/Profile/index";
import Page404 from './Component/Common/404page';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route exact path={ROUTES.PROFILE} component={Profile} />
        <Route exact path={ROUTES.CLIENT} component={Client} />
        <Route exact path={ROUTES.RECRUITER} component={Recruiter} />
        <Route exact path={ROUTES.LOGOUT} component={Profile} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
