import React from 'react'

function Header() {
  return (
    <nav className='Navbar bg-light d-flex justify-content-between fixed-top' style={{boxShadow:"0px 2px 4px rgba(0,0,0,0.1)"}}>
      <img src="https://penji.co/wp-content/uploads/2024/01/5.-Food-Panda.jpg" alt="logo"
      width={125}
      height={80}
      className='mx-2 my-2' />
      <ul className='navbar-nav d-flex flex-row align-items-center'>
        <li className='nav-item mx-4 py-2 px-2 border rounded-1'>HOME</li>
        <li className='nav-item mx-4 py-2 px-2 border rounded-2'>ABOUT</li>
        <li className='nav-item mx-4 py-2 px-2 border rounded-2'>CONTACT</li>
        <li className='nav-item mx-4 py-2 px-2 border rounded-2'>CART</li>
      </ul>
    </nav>
  )
}

export default Header