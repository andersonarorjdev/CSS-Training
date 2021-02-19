import React from 'react';
import './EmailValidator.css';
import Validate from './Logical';

const EmailValidator = props =>{
    return(
        <div id="Validate">
           <h3>Email Validator</h3>
           <form action="" id="form">
            <div class="inputBox">
                <input type="text" onKeyPress={Validate} id="email" placeholder="Digite aqui o seu email"/>
                <span class="indicator"></span>    
            </div>
           </form>
        </div>
    );
}

export default EmailValidator;