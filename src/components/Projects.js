import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/federated_UI.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const projects = [
        {
            title: "Federated Learning",
            description: "Revolutionising Conventional Machine Learning",
            imgUrl: projImg1,
        },
        {
            title: "Churn Attrition",
            description: "Predicting customer's churn value to further increacse effectiveness of marketing campaigns",
            imgUrl: projImg2,
        },
        {
            title: "Minesweepers",
            description: "Optimised Shortest Path algorithm for minesweepers",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Herein lies the result of the effort of the work done. Gruelling as it was,
                            it was most definitely fruitful, the idea of seeing through a project from start
                            to end continously proved to be one of a worthwhile and enjoyable journey. Project management has once again
                            been proved to be <b>essential</b>!
                        </p>
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            title={project.title}
                                            description={project.description}
                                            imgUrl={project.imgUrl}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="backgroundImage2"></img>
        </section >
    )
}