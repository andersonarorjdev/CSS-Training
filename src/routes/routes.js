import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from '../Home/Home';
import FlyingText from '../animations/FlyingText/FlyingText';
import EmailValidator from '../animations/EmailValiador/EmailValidator';

export default function Routes(){
    return(
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/FlyingText" component={FlyingText} />
          <Route path="/EmailValidator" component={EmailValidator} />
        </BrowserRouter>
    );
}