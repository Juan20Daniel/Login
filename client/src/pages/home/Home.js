import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import './home.css';
import MenuSider from "../../components/menuSider/MenuSider";
import Modals from "../../components/modals/Modals";
const Home = () => {
    const [ menu, setMenu ] = useState(false);

    return (
        <>
            <header className="header-home">
                <Modals />
                <Navbar menu={menu} setMenu={setMenu}/>
                <MenuSider menu={menu}/>
                <div className="header-content">
                    <h1 className="header__title">Pagina web, test login, sigin.</h1>
                    <p className="header__text">Creaccion de login y sigin en react,
                        node y mysql con implementación de
                        JWT en el backend.
                    </p>
                    <button className="header__buton">Suscribir</button>
                    <div className="header__xps">
                        <div className="xps--circle">
                            <p>XPS</p>
                        </div>
                        <div className="xps--info">
                            <p className="xps--info-name">XPS</p>
                            <p className="xps--info-description">Designed to be the best</p>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
                <h1>Content..</h1>
            </main>
            <footer>
                <h1>Footer..</h1>
            </footer>
        </>
    );
}

export default Home;