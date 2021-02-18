import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from '../Home/Home';
import Animation1 from '../animations/Animation1/Animation1';

export default function Routes(){
    return(
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/animation1" component={Animation1} />
        </BrowserRouter>
    );
}