import { Col } from "react-bootstrap";

export const ProjectCard = ({ id, title, description, imgUrl }) => {
    return (
        <Col xs={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="projectImages" />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}