import { NavLink } from 'react-router';
import './nav.scss';

const Nav = () => {
    
    return (
        <div className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item'><NavLink className='link' style={({isActive}) => ({color: isActive ? 'green' : null})} to={'/'}>Home</NavLink></li>
                <li className='nav__list-item'><NavLink className='link' style={({isActive}) => ({color: isActive ? 'green' : null})} to={'/setting'}>Setting</NavLink></li>
                <li className='nav__list-item'><NavLink className='link' style={({isActive}) => ({color: isActive ? 'green' : null})} to={'/about'}>About</NavLink></li>
                <li className='nav__list-item'><NavLink className='link' style={({isActive}) => ({color: isActive ? 'green' : null})} to={'/contact'}>Contact</NavLink></li>
            </ul>
        </div>
    )
}


export default Nav;