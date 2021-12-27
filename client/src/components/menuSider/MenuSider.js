import './menuSider.css';
import { Link } from 'react-router-dom';
const MenuSider = ({ menu }) => {
    
    return (
        <div className={`menuSider-container ${menu && "openMenu"}`}>
            <p>Opciones</p>
            <div className="menuSider-links">
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to="/">Nosotros</Link>
                <Link className='link' to="/">Contactos</Link>
                <Link className='link' to="/">Login</Link>
                <Link className='link' to="/">Sigin</Link>
            </div>
        </div>
    );
}
 
export default MenuSider;