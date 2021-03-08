import React from 'react';
import HeaderButton from './HeaderButton';
import HeaderInnerLink from './HeaderInnerLink';
import './Header.css';

function Header() {

  return (
    <div className='headerWrapper'>
      <div className='headerTitleWrapper'>
      <h1 className='headerTitle'> Title </h1>
      </div>
      <div className='buttonsWrapper'>
        <HeaderButton text='Korábbi videók' url='https://www.youtube.com/watch?v=GHXG3xrIDLY' />
        <HeaderInnerLink text='admin' url='/admin' />
        <HeaderInnerLink text='Hirdetés' url='/hirdetes' />
      </div>
    </div>
  )
}

export default Header;