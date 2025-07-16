import React, { useEffect } from 'react'
import Office from '../../assets/images/Office.png';
import Flask from '../../assets/images/Flask.svg';
import Menu_Book from '../../assets/images/Menu-Book.svg';
import iconoir_magic_wand from '../../assets/images/iconoir_magic-wand.svg';
import center_img from '../../assets/images/center-img.jpg';
import headphone from '../../assets/images/headphone.png';
import request from '../../assets/images/request.png';
import Partner from '../../assets/images/Partner.png';

const Services = () => {

    useEffect(() => {
        document.title = 'PAARS | Services';
    }, []);


    return (
        <div>
            <div class="our_service services_page">
                <div class="container">
                    <div class="our_service_inner">
                        <div class="our_service_text">
                            <span class="reform-title">Our Services</span>
                            <h3 class="section_title">Strategic Services for Smarter Regulation</h3>
                            <p class="disc-text">PAARS offers specialized services to help governments build transparent,
                                effective, and modern regulatory systems.</p>
                        </div>

                    </div>
                    <div class="approach-grid">

                        <div class="left-col">
                            <div class="feature-box" data-aos="fade-right">
                                <div class="feature-icon">
                                    <img src={Office} alt="iconoir_magic-icon" />
                                </div>
                                <div class="feature-content">
                                    <h3>Regulatory Blueprint </h3>
                                    <p>A strong regulatory system needs clear frameworks, strong institutions, and effective
                                        tools. PAARS helps governments design and optimize Better Regulation systems to
                                        ensure smarter, transparent ... </p>
                                    <div class="service_area">
                                        <a href="./regulatory-blueprint.html">Explore this service area <i
                                            class="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="feature-box" data-aos="fade-right">
                                <div class="feature-icon">
                                    <img src={Flask} alt="Flask-icon" />
                                </div>
                                <div class="feature-content">
                                    <h3>Regulatory & Policy Lab </h3>
                                    <p>Regulatory success requires skilled policymakers and strong institutions. The
                                        Regulatory Academy offers tailored training on creating, assessing, and implementing
                                        effective regulations,... </p>
                                    <div class="service_area">
                                        <a href="./regulatory-and-policy-lab.html">Explore this service area <i
                                            class="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="center-col">
                            <div class="image-center" data-aos="zoom-in">
                                <img src={center_img} alt="image-center" />
                            </div>
                        </div>



                        <div class="right-cols">
                            <div class="feature-box" data-aos="fade-left">
                                <div class="feature-icon">
                                    <img src={iconoir_magic_wand} alt="iconoir_magic-icon" />
                                </div>
                                <div class="feature-content">
                                    <h3>Catalyst Projects </h3>
                                    <p>Regulatory reform requires practical, focused solutions. Through Catalyst Projects,
                                        PAARS supports governments with tailored strategies froms takeholder engagement,
                                        capacity building...</p>
                                    <div class="service_area">
                                        <a href="./catalyst-projects.html">Explore this service area <i
                                            class="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="feature-box" data-aos="fade-left">
                                <div class="feature-icon">
                                    <img src={Menu_Book} alt="Menu-Book-icon" />
                                </div>
                                <div class="feature-content">
                                    <h3>Regulatory Academy</h3>
                                    <p>Regulatory reform requires practical, focused solutions. Through Catalyst Projects,
                                        PAARS supports governments with tailored strategies froms takeholder engagement, ...
                                    </p>
                                    <div class="service_area">
                                        <a href="./regulatory-academy.html">Explore this service area <i
                                            class="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="together_for_better_governance">
                <div class="container">
                    <div class="together_for_better_governance_inner">
                        <div class="together_for_better_governance_content">
                            <span class="reform-title">Together for Better Governance</span>
                            <h3 class="section_title" data-aos="zoom-in">Let's talk about building Better Systems</h3>
                        </div>
                        <div class="building-better">
                            <div class="row">
                                <div class="col-lg-4 col-md-4">
                                    <div class="building-better-card" data-aos="fade-up">
                                        <div class="building-better-card-icon">
                                            <img src={headphone} alt="headphone" />
                                        </div>
                                        <div class="building-better-card-content">
                                            <h4>Contact Us</h4>
                                            <p>Discuss your regulatory challenges and explore how PAARS can provide tailored
                                                solutions. </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <div class="building-better-card" data-aos="fade-up">
                                        <div class="building-better-card-icon">
                                            <img src={request} alt="request" />
                                        </div>
                                        <div class="building-better-card-content">
                                            <h4>Request a Proposal</h4>
                                            <p>Tell us your needs, and we’ll craft a tailored proposal to match your goals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <div class="building-better-card" data-aos="fade-up">
                                        <div class="building-better-card-icon">
                                            <img src={Partner} alt="Partner" />
                                        </div>
                                        <div class="building-better-card-content">
                                            <h4>Partner with Us</h4>
                                            <p>We offer long-term advisory, training, and research partnerships to support
                                                lasting regulatory improvement. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Services