import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const Carousel = () => {
    const scaleImage = (image) => {
        const activeImage = document.querySelector(
            "#imageContainer img.active"
        );
        if (activeImage) {
            activeImage.classList.remove("active");
        }
        const container = document.querySelector("#imageContainer");
        container.children[image - 1].classList.add("active");
    };

    return (
        <div id="imageContainer">
            <img src={image2} alt="product" onClick={() => scaleImage(1)} />
            <img
                src={image1}
                className="active"
                alt="product"
                onClick={() => scaleImage(2)}
            />
            <img src={image3} alt="product" onClick={() => scaleImage(3)} />
        </div>
    );
};

export default Carousel;
