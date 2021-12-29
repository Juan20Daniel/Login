import './menuSider.css';
import { Link } from 'react-router-dom';
const MenuSider = ({ menu, setMenu, setLogin, setSigin }) => {
    const openSigin = () => {
        setMenu(false);
        setSigin(true);
    }
    const openLogin = () => {
        setMenu(false);
        setLogin(true);
    }
    return (
        <div className={`menuSider-container ${menu && "openMenu"}`}>
            <p>Opciones</p>
            <div className="menuSider-links">
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to="/">Nosotros</Link>
                <Link className='link' to="/">Contactos</Link>
                <button className='link' onClick={openLogin}>Login</button>
                <button className='link' onClick={openSigin}>Sigin</button>
            </div>
        </div>
    );
}
 
export default MenuSider;