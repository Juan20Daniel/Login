import { useEffect } from 'react';
import './menuSider.css';
import { Link } from 'react-router-dom';
const MenuSider = ({ menu }) => {
    useEffect(() => {
        window.onscroll = function() {
            var y = window.scrollY;
            console.log(y);
            if(y > 593) {
                alert("Cam color");
            }
        }
    }, []);
    return (
        <div className={`menuSider-container ${menu && "openMenu"}`}>
            <p>Menú Sider</p>
            <div className="menuSider-links">
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to="/">Nosotros</Link>
                <Link className='link' to="/">Contactos</Link>
                <Link className='link' to="/access">Login</Link>
                <Link className='link' to="/access/sigin">Sigin</Link>
            </div>
        </div>
    );
}
 
export default MenuSider;