import React from 'react';
import HeaderButton from './HeaderButton';
import HeaderInnerLink from './HeaderInnerLink';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {

  return (
    <div className='headerWrapper'>
      <div className='headerTitleWrapper'>
        <Link to='/' className='headerLinkWrapper'>
          <h1 className='headerTitle'> Dejtári Római Katolikus Egyházközség </h1>
        </Link>
      </div>
      <div className='buttonsWrapper'>
        <HeaderButton text='Youtube csatorna' url='https://www.youtube.com/channel/UCn66o0kJDpHK8Wfu72U4oKg/featured' />
        <HeaderInnerLink text='Hirdetés' url='/hirdetes' />
      </div>
    </div>
  )
}

export default Header;