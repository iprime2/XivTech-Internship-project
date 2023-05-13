import { ChevronDown, Menu, Search } from 'lucide-react'

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img
          className='navbar-logo'
          src='https://www.xivtech.io./logo.svg'
          alt=''
        />
        <img
          className='navbar-logo-text'
          src='https://www.xivtech.io./Text.svg'
          alt=''
        />
      </div>

      <div className='navbar-right'>
        <Menu className='menu-icon' onClick={toggleMenu} />
        <div className='navbar-right-items'>
          <div className='item item-arrow'>
            Services
            <ChevronDown className='navbar-down-icons' />
          </div>
          <div className='item'>Careers</div>
          <div className='item'>About</div>
          <div className='item'>Contact</div>
          <div className='item'>
            <Search className='search-icon' />
          </div>
        </div>

        <button className='navbar-talk-btn'>{'Let' + "'" + 's talk'}</button>
      </div>
    </nav>
  )
}

export default Navbar
