import React from 'react';
import './EmailValidator.css';
import Validate from './Logical';

import Navbar from '../../components/header/header';

const EmailValidator = props =>{
    return(
        <>
            <Navbar />
            <div id="Validate">
            <h3>Email Validator</h3>
            <form action="" id="form">
                <div class="inputBox">
                    <input type="text" onKeyPress={Validate} id="email" placeholder="Digite aqui o seu email"/>
                    <span class="indicator"></span>    
                </div>
            </form>
            </div>
        </>
    );
}

export default EmailValidator;