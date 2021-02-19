import React from 'react';

import {NavbarTAG, ButtonBack} from './header-style';

const Navbar = props =>{
    return(
       <NavbarTAG>
          <ButtonBack href="/">Voltar</ButtonBack>
       </NavbarTAG>
    );
}

export default Navbar;