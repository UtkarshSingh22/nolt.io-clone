import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import Testimonials from "../components/Testimonials";
import TrialPopup from "../components/TrialPopup";
import Usage from "../components/Usage";
import { useRef, useEffect, useState } from "react";
import Media3Cols from "../utils/Media3Cols";

const Home = () => {
    const col1Ref = useRef(null);
    const col2Ref = useRef(null);
    const col3Ref = useRef(null);

    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        setRendered(true);
    }, []);

    return (
        <div>
            <NavBar />
            <MainContent />
            <Carousel />
            <Usage />
            <Testimonials
                col1Ref={col1Ref}
                col2Ref={col2Ref}
                col3Ref={col3Ref}
            />
            <TrialPopup />
            <Footer />
            {rendered && (
                <Media3Cols
                    col1Ref={col1Ref}
                    col2Ref={col2Ref}
                    col3Ref={col3Ref}
                />
            )}
        </div>
    );
};

export default Home;
