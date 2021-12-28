import './menuSider.css';
import { Link } from 'react-router-dom';
const MenuSider = ({ menu, setMenu, setSigin }) => {
    const callSetMenu = () => {
        setMenu(false);
        setSigin(true);
    }
    return (
        <div className={`menuSider-container ${menu && "openMenu"}`}>
            <p>Opciones</p>
            <div className="menuSider-links">
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to="/">Nosotros</Link>
                <Link className='link' to="/">Contactos</Link>
                <button className='link'>Login</button>
                <button className='link' onClick={callSetMenu}>Sigin</button>
            </div>
        </div>
    );
}
 
export default MenuSider;