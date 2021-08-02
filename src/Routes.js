import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import App from './App';
import { TOKEN, USER, ROUTES } from './Common/constant';
import Login from './Component/auth/login';
import Register from './Component/auth/register';
import Logout from './Component/auth/logout';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    const isToken = localStorage.getItem(TOKEN) // check password exist or not
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.LOGIN} render={props =>
                    isToken ? <Redirect to='/' /> : <Login {...props} />} />
                <Route exact path={ROUTES.REGISTER} render={props =>
                    isToken ? <Redirect to='/' /> : <Register {...props} />} />
                <Route exact path={ROUTES.LOGOUT} component={Logout} />
                <PrivateRoute path="/" component={App} />
            </Switch>
        </Router>
    );
};
export default Routes;
