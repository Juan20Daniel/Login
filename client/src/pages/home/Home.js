import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import './home.css';
import MenuSider from "../../components/menuSider/MenuSider";

const Home = () => {
    const [ menu, setMenu ] = useState(false);

    return (
        <>
            <header>
                <Navbar menu={menu} setMenu={setMenu}/>
                <MenuSider menu={menu}/>
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
            </main>
            <footer>
                <h1>Footer..</h1>
            </footer>
        </>
    );
}

export default Home;