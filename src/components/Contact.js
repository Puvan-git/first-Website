import validator from 'validator';
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {
    const formInitialDetails = {
        email: '',
        name: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [submitButtonText, setsubmitButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const emailValidation = (e) => {
        var email = e.target.value;

        if (email === "") {
            setEmailError("");
            return;
        }
        if (validator.isEmail(email)) {
            setEmailError('Valid Email');
        } else {
            setEmailError('Invalid Email. Please key in again!');
        }
    }

    const phoneValidation = (e) => {
        var phone = e.target.value;

        if (phone === "") {
            setPhoneError("");
            return;
        }

        if (validator.isMobilePhone(phone)) {
            setPhoneError("Valid Phone Number");
        } else {
            setPhoneError("Invalid Phone Number. Please key in again!");
        }
    }

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setsubmitButtonText('Sending...');

        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=urf-8",
            },
            body: JSON.stringify(formDetails),
        });

        setsubmitButtonText("Send");

        let result = response.json();
        setFormDetails(formInitialDetails);

        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent sucecessfully" });
        } else {
            setStatus({ success: false, message: "Error sending message, please try again." })
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} >
                        <img src={contactImg} alt="Contact Us"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={12} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address"
                                        onChange={(e) => {
                                            emailValidation(e);
                                            onFormUpdate('email', e.target.value);
                                        }}></input>
                                    {emailError !== "Valid Email" ? <p className="danger">{emailError}</p> : ""}
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" pattern="[0-9]{8}"
                                        onChange={(e) => {
                                            phoneValidation(e);
                                            onFormUpdate('phone', e.target.value)
                                        }}>
                                    </input>
                                    {phoneError !== "Valid Phone Number" ? <p className="danger">{phoneError}</p> : ""}
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{submitButtonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "Error" : "Successful"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}