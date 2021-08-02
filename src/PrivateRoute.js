import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TOKEN, ROUTES } from './Common/constant';
const PrivateRoute = ({ component: Component, ...rest }) => {
    const isToken = localStorage.getItem(TOKEN)
    return (
        <Route
            {...rest}
            render={(props) =>
                !isToken ? <Redirect to={ROUTES.LOGIN} /> : <Component {...props} />
            }
        />
    );
};
export default PrivateRoute;