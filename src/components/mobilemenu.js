import './mobilemenu.css';
import { Button } from '../components/mobilebutton'
import { Link } from 'react-router-dom'

function MobileMenu() {
  
  return (
    <div className={`mobile-container`}>
        <div className='mobile-buttons'>
    <Link to='/digital-marketing'>
      <Button className="m-btns" buttonStyle='m-btn--1'>DIGITAL MARKETING</Button>
    </Link>
    <Link to='/web-design'>
      <Button className="m-btns" buttonStyle='m-btn--2'>WEBSITE DESIGN</Button>
    </Link>
    <Link to='/graphic-design'>
      <Button className="m-btns" buttonStyle='m-btn--3'>GRAPHIC DESIGN</Button>
      </Link>
    <Link to='/motion-design'>
      <Button className="m-btns" buttonStyle='m-btn--4'>MOTION DESIGN</Button>
    </Link>
    </div>
    </div>
  )
}

export default MobileMenu

