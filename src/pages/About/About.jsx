import React from 'react'
import aboutimg from '../../assets/images/aboutimg.png';
import wedo from '../../assets/images/wedo.png';
import matter2 from '../../assets/images/matter2.png';
import matter1 from '../../assets/images/matter1.png';
import bag from '../../assets/images/bag.png';
import bag1 from '../../assets/images/bag1.png';
import bag2 from '../../assets/images/bag2.png';
import streamline_graph_bar_increase from '../../assets/images/streamline_graph-bar-increase.png';
import mage_file_2 from '../../assets/images/mage_file-2.png';
import ph_handshake_light from '../../assets/images/ph_handshake-light.png';
import headphone from '../../assets/images/headphone.png';
import request from '../../assets/images/request.png';
import Partner from '../../assets/images/Partner.png';

const About = () => {
    return (
        <div>
            <section class="who-we-are">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="text-main" data-aos="fade-right">
                                <span class="reform-title">WHO WE ARE</span>
                                <h1>Innovative Governance and Policy Development</h1>
                                <p class="disc-text">
                                    PAARS is a specialized advisory firm that supports governments in strengthening
                                    regulatory
                                    frameworks, improving policymaking processes, and designing strategies to enhance
                                    innovation, accountability, and institutional effectiveness. We focus on Better
                                    Regulation,
                                    helping to ensure that the institutions, tools, and processes behind regulation are
                                    transparent, agile, and fit for purpose.
                                </p>
                                <p class="disc-text">
                                    Our expertise spans regulatory governance, stakeholder engagement, and core instruments
                                    such
                                    as regulatory impact assessments (RIA), public consultation, administrative burden
                                    reduction, and digital transformation.
                                </p>
                            </div>
                        </div>


                        <div class="col-lg-5">
                            <div class="image-section" data-aos="fade-left">
                                <img src={aboutimg} alt="Team at work" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="who-we-do">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="image-section" data-aos="fade-right">
                                <img src={wedo} alt="Team at work" />
                            </div>
                        </div>

                        <div class="col-lg-7">

                            <div class="text-section" data-aos="fade-left">
                                <span class="reform-title">What We Do </span>
                                <h2 class="pras_has">Empowering Governments Through Regulatory Innovation</h2>
                                <p class="mb-3">
                                    PAARS partners with governments to evaluate, design, and enhance regulatory frameworks.
                                    We
                                    assess institutional roles, tools, and interactions to optimize systems that support
                                    national goals.
                                </p>
                                <p>
                                    Through our key service areas—Regulatory Blueprint, Catalyst Projects, Regulatory
                                    Academy,
                                    and the Regulatory & Policy Lab—we deliver hands-on support, tailored training, and
                                    applied
                                    research to enable smarter, evidence-based governance.
                                </p>
                                <div class="btn-contact-wrapper">
                                    <a href="#" class="btn-contact">
                                        <span class="btn-text">See our services</span>
                                        <div class="icon-container">
                                            <span class="icon icon-default arrow-icon">
                                                <i class="fa-solid fa-arrow-up"></i>
                                            </span>
                                            <span class="icon icon-hover arrow-icon">
                                                <i class="fa-solid fa-arrow-up"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="why-it-matter">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="matter_img1" data-aos="zoom-in" data-aos-delay="200">
                                <img src={matter2} alt="team" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="together_why" data-aos="fade-up">
                                <div class="why_it">
                                    <span class="reform-title">Why It Matters</span>
                                    <h3 class="section_title">Strengthening Governance Through Smart Regulation</h3>
                                    <p class="disc-text">Effective regulation is key to good governance, long-term impact,
                                        and
                                        public trust. Poorly
                                        designed systems create burdens and block innovation. </p>
                                    <p class="disc-text">PAARS helps bridge the gap—supporting institutions in building
                                        transparent,
                                        evidence-based
                                        strategies that boost accountability, performance, and confidence in public
                                        decisions.
                                    </p>
                                </div>
                                <div class="btn-contact-wrapper">
                                    <a href="javascript:void(0)" class="btn-contact getInTouch" >
                                        <span class="btn-text">Get in touch</span>
                                        <div class="icon-container">
                                            <span class="icon icon-default arrow-icon">
                                                <i class="fa-solid fa-arrow-up"></i>
                                            </span>
                                            <span class="icon icon-hover arrow-icon">
                                                <i class="fa-solid fa-arrow-up"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="matter_img2" data-aos="zoom-in" data-aos-delay="200">
                                <img src={matter1} alt="team" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="approach">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="app_on">
                                <span class="reform-title">How We Drive Results</span>
                                <h3 class="section_title">Our Approach </h3>
                                <p class="disc-text">At PAARS, we believe that better regulation starts with better
                                    frameworks,
                                    processes,
                                    and governance
                                    structures. Our approach is built on strategic analysis, hands-on collaboration, and
                                    evidence-based
                                    policymaking.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row text-center text-lg-start">

                        <div class="col-lg-4">
                            <div class="feature-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={bag} alt="Icon 1" class="feature-icon" />
                                <h5 class="feature-title">Strategic and evidence-based</h5>
                                <ul class="feature-list">
                                    <li>Regulation must be clear, data-driven, and adaptable to future challenges.</li>
                                    <li>PAARS evaluates frameworks, identifies gaps, and improves policy tools like RIAs and
                                        consultations.</li>
                                    <li>We apply global best practices to ensure policies are effective and future-ready.
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-lg-4">
                            <div class="feature-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={bag1} alt="Icon 2" class="feature-icon" />
                                <h5 class="feature-title">Tailored to Institutional Needs</h5>
                                <ul class="feature-list">
                                    <li>PAARS customizes solutions to each country’s regulatory and political context.</li>
                                    <li>We align frameworks with national goals, from new setups to refining existing tools.
                                    </li>
                                    <li>We advise on regulatory innovation, digital tools, and emerging sector policies.
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-lg-4">
                            <div class="feature-box last_child" data-aos="fade-up" data-aos-delay="100">
                                <img src={bag2} alt="Icon 3" class="feature-icon" />
                                <h5 class="feature-title">Collaborative and Future-Ready</h5>
                                <ul class="feature-list">
                                    <li>Effective reform needs strong ownership, stakeholder input, and adaptability.</li>
                                    <li>PAARS partners with institutions to design practical, inclusive, and tech-ready
                                        solutions.</li>
                                    <li>We provide hands-on support—training, tools, and guidance—to turn reforms into
                                        action.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="Engagement">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="scale_on" data-aos="fade-right">
                                <span class="reform-title">Engagement Models</span>
                                <h3 class="section_title">
                                    Partnering Through Custom Engagement Frameworks
                                </h3>
                                <p class="disc-text">PAARS works with you through flexible engagement models that align with
                                    your objectives and policy environment.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="scale_box" data-aos="fade-left" data-aos-delay="100">
                                <img src={streamline_graph_bar_increase} alt="" />
                                <h4>Full-Scale </h4>
                                <p>End-to-end support, from diagnostic, implement and monitoring: Ideal for full reform
                                    projects. </p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="scale_box" data-aos="fade-left" data-aos-delay="100">
                                <img src={mage_file_2} alt="" />
                                <h4>Targeted Advisory </h4>
                                <p>Focused support for regulatory policy tools and and evidence-based research. </p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="scale_box" data-aos="fade-left" data-aos-delay="100">
                                <img src={ph_handshake_light} alt="" />
                                <h4>Capacity-Building </h4>
                                <p>Custom training and mentorship for oversight bodies, agencies, and professionals. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

export default About