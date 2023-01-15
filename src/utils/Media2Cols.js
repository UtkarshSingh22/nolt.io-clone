import Media from "react-media";

const Media2Cols = ({ col1Ref, col2Ref }) => {
    return (
        <Media query="(max-width: 688px)">
            {(matches) => {
                const testimonial1 = [];

                if (matches) {
                    const len = col2Ref.current.children.length;

                    for (let index = 0; index < len; index++) {
                        testimonial1.push(col2Ref.current.children[index]);
                    }

                    col2Ref.current.textContent = "";
                    col1Ref.current.append(...testimonial1);
                } else if (!col2Ref.current.children.length) {
                    const len = col1Ref.current.children.length;

                    for (let index = len - 1; index > len - 11; index--) {
                        testimonial1.push(col1Ref.current.children[index]);
                    }
                    col2Ref.current.append(...testimonial1);
                }
            }}
        </Media>
    );
};

export default Media2Cols;
