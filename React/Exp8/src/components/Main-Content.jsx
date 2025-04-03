import { useState } from "react";
import "./component.css";

export const MainContent = () => {
    const [section, setSection] = useState("Home");

    return (
        <>
            <div className="main">
                <div className="navigation">
                    <p className={section === "Home" ? "active" : ""} onClick={() => setSection("Home")}>Home</p>
                    <p className={section === "About" ? "active" : ""} onClick={() => setSection("About")}>About</p>
                    <p className={section === "Contact" ? "active" : ""} onClick={() => setSection("Contact")}>Contact</p>
                </div>
                <div className="m-content">
                    {section === "Home" && (
                        <div className="home-section">
                            <h1>Welcome to Our Website</h1>
                            <p class="A">We are committed to delivering exceptional services and solutions tailored to meet your needs.  </p>
                            <p class="A">Whether you are looking for reliable products, expert guidance, or innovative solutions, we are here to help. Our team is dedicated to ensuring customer satisfaction by offering high-quality services and a seamless experience.
                            Explore our website to learn more about what we offer, and feel free to reach out with any inquiries.</p>
                            <p className="A">Thank you for visiting—we look forward to serving you! </p>
                        </div>
                    )}
                    {section === "About" && (
                        <div className="about-section">
                            <h1>About Us</h1>
                            <p class="A">We are a dynamic team of passionate individuals dedicated to providing top-notch solutions that make a difference. With years of experience in the industry, we strive to deliver innovative and reliable services that meet the evolving needs of our clients.</p>
                            <p class="A">Our mission is to create value by offering high-quality products and services that empower individuals and businesses. We are committed to maintaining excellence, fostering creativity, and building long-term relationships with our customers.</p>
                            <p class="A">✅Customer-centric approach with personalized solutions.</p>
                            <p className="A">🌟 Commitment to quality and innovation.</p>
                            <p className="A">🔥 A dedicated support team to assist you at every step.</p>
                        </div>
                    )}
                    {section === "Contact" && (
                        <div className="contact-section">
                            <h1>Contact Us</h1>
                            
                            <p className="A">If any questions contect us through :</p>
                            <p class="A"><b>Email:</b> kevinbarochiya1@gmail.com</p>
                            <p class="A"><b>Phone:</b> +91 7016957669</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};