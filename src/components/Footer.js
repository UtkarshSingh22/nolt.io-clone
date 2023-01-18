import styles from "../styles/Footer.module.css";
import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1140 250"
                className={styles.wave}
                preserveAspectRatio="none"
            >
                <path
                    fill="#fec3c1"
                    fillOpacity="1"
                    d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,234.7C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
            <footer className={styles.footer}>
                <div>Features</div>
                <div>Pricing</div>
                <div>Help</div>
                <div>Terms</div>
                <div>Privacy</div>
            </footer>
        </Fragment>
    );
};

export default Footer;
