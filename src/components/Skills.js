import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
// import meter4 from "../assets/img/meter4.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Every project demands a unique set of tools and technologies. My skills
                                carousel isn't just a list; it's a portfolio of possibilities—each skill
                                a building block for innovation and problem-solving. Endless possibilities mean
                                endless problems that could arise as well, it is my job as a developer to break it
                                down recursively into tinier chunks to be handled with. The obstacle is only as large
                                as we imagine it to be!</p>
                            <Carousel
                                responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="carouselImage"></img>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="carouselImage"></img>
                                    <h5>Data Analytics</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="carouselImage"></img>
                                    <h5>Product Management</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="carouselImage"></img>
                                    <h5>Machine Learning</h5>
                                </div>
                                {/* <div className="item">
                                    <img src={meter4} alt="Image"></img>
                                    <h5>Machine Learning</h5>
                                </div> */}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="backgroundImage"></img>
        </section>
    )
}