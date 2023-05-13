import { X } from 'lucide-react'

const Menu = ({ toggleMenu }) => {
  return (
    <div className='menu'>
      <X onClick={toggleMenu} className='menu-icon' />
      <div className='menu-items'>
        <div className='item item-arrow'>Services</div>
        <div className='item'>Careers</div>
        <div className='item'>About</div>
        <div className='item'>Contact</div>
        <div className='item'></div>
      </div>
    </div>
  )
}

export default Menu
