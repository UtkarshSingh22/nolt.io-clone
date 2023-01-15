import styles from "../styles/NavBar.module.css";
import ToggleSwitch from "../utils/ToggleSwitch";
import { useState } from "react";

const changeProperty = (name, value) => {
    document.documentElement.style.setProperty(name, value);
};

const NavBar = () => {
    const [lightMode, setLightMode] = useState(true);
    const [navOpen, setNavOpen] = useState(false);

    const toggleMode = () => {
        if (!lightMode) {
            changeProperty("--background-color", "#fff");
            changeProperty("--text-color", "#983734");
            changeProperty("--button-bg-color", "rgb(56, 41, 70)");
            changeProperty("--button-text-color", "#fff");
            changeProperty("--card-bg-color", "#fec3c1");
            changeProperty("--card-text-color", "rgb(0,0,0)");
        } else {
            changeProperty("--background-color", "#222");
            changeProperty("--text-color", "#fff");
            changeProperty("--button-bg-color", "#d6d6d6");
            changeProperty("--button-text-color", "#7f3533");
            changeProperty("--card-bg-color", "#d6d6d6");
            changeProperty("--card-text-color", "rgb(0,0,0)");
        }

        setLightMode((prevState) => {
            return !prevState;
        });
    };

    const toggleMenu = () => {
        setNavOpen((prevState) => !prevState)
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img
                    src="https://cdnb.nolt.io/image/upload/caakwki03eugnntvx7wu/1628788100.png"
                    alt="nolt icon"
                />
                <div>Nolt</div>
            </div>
            <div className={styles.options}>
                <div>Features</div>
                <div>Pricing</div>
                <div>Help</div>
                <div>Sign in</div>
                <div className={styles.btn}>Create a Nolt board</div>
                <ToggleSwitch toggleMode={toggleMode} />
            </div>
            {navOpen && (
                <div className={styles.mobNav}>
                    <div>Sign in</div>
                    <div>Create a Nolt board</div>
                    <div className={styles.line}></div>
                    <div>Features</div>
                    <div>Pricing</div>
                    <div>Help</div>
                    <ToggleSwitch toggleMode={toggleMode} />
                </div>
            )}
            <div className={styles.menu} onClick={toggleMenu}>Menu</div>
        </nav>
    );
};

export default NavBar;
