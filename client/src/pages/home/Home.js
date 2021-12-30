import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import './home.css';
import MenuSider from "../../components/menuSider/MenuSider";
import Sigin from "../../components/sigin/Sigin";
import Login from "../../components/login/Login";
import Admin from '../admin/Admin';
import { Route, Redirect } from "react-router-dom";
const Home = () => {
    const [ menu, setMenu ] = useState(false);
    const [ sigin, setSigin ] = useState(false);
    const [ login, setLogin ] = useState(false);
    const user = false;
    if(user) {
        return (
            <>
                <Route path="/admin" component={Admin} />
                <Redirect to="/admin" />
            </>
        )
    }
    return (
        <>
            <header className="header-home">
                <Sigin sigin={sigin} setSigin={setSigin} setLogin={setLogin}/>
                <Login login={login} setLogin={setLogin} setSigin={setSigin}/>
                <Navbar menu={menu} setMenu={setMenu} setSigin={setSigin} setLogin={setLogin}/>
                <MenuSider menu={menu} setSigin={setSigin} setLogin={setLogin} setMenu={setMenu} />
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