import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Registration from './registration';
import Login from './login';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component  {  constructor(props) {
    super(props);
    this.state = {};
}
render() {
    return (
        <div className="welcome">


            <img className="bike-riding-gif" src="/woman-riding-bike.gif" />
            <h1 className="name-on-bike" > Share a ride </h1>
            <HashRouter>
                <div>
                    <Route exact path="/" component={Registration} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>


        </div>
    );
}
}
