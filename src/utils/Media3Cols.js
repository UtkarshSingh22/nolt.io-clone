import Media from "react-media";

const Media3Cols = ({ col1Ref, col2Ref, col3Ref }) => {
    return (
        <Media query="(max-width: 1280px)">
            {(matches) => {
                const testimonial1 = [],
                    testimonial2 = [];
                if (matches) {
                    const len = col3Ref.current.children.length;

                    for (let index = 0; index < len; index++) {
                        if (index < 4) {
                            testimonial1.push(col3Ref.current.children[index]);
                        } else {
                            testimonial2.push(col3Ref.current.children[index]);
                        }
                    }

                    col3Ref.current.textContent = "";
                    col1Ref.current.append(...testimonial1);
                    col2Ref.current.append(...testimonial2);
                } else if (!col3Ref.current.children.length) {
                    const len1 = col1Ref.current.children.length,
                        len2 = col2Ref.current.children.length;

                    for (let index = len1 - 1; index > len1 - 5; index--) {
                        testimonial1.push(col1Ref.current.children[index]);
                    }
                    for (let index = len2 - 1; index > len2 - 4; index--) {
                        testimonial1.push(col2Ref.current.children[index]);
                    }
                    col3Ref.current.append(...testimonial1);
                }
            }}
        </Media>
    );
};

export default Media3Cols;
