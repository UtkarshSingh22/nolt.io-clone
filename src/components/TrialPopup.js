import { useEffect } from "react";
import styles from "../styles/TrialPopup.module.css";

const TrialPopup = () => {
    useEffect(() => {
        window.addEventListener("scroll", reveal);

        return () => {
            window.removeEventListener("scroll", reveal);
        };
    }, []);

    const reveal = () => {
        let popup = document.querySelector("#reveal");
        let usageDiv = document.querySelector('#usage')

        let windowHeight = window.innerHeight;
        let revealTop = usageDiv.getBoundingClientRect().top;
        let revealPoint = 80;

        if (revealTop < windowHeight - revealPoint) {
            popup.classList.add("active");
        } else {
            popup.classList.remove("active");
        }
    };

    return (
        <div className={styles.main} id="reveal">
            <div>
                <div>Try it free for 10 days&nbsp;</div> without a credit card
            </div>
            <button>Create a Nolt board</button>
        </div>
    );
};

export default TrialPopup;
