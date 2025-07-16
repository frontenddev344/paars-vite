import React from 'react'
import hero from '../../assets/images/hero.jpg';
import hugeicons from '../../assets/images/hugeicons.svg';
import iconoir_magic_wand from '../../assets/images/iconoir_magic-wand.svg';
import flask from '../../assets/images/Flask.svg';
import menu_book from '../../assets/images/Menu-Book.svg';
import assessment from '../../assets/images/assessment.png';
import streamline_target from '../../assets/images/streamline_target.png';
import Implementation from '../../assets/images/Implementation.png';
import teenyicons_screen_outline from '../../assets/images/teenyicons_screen-outline.png';
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';
import center_img from '../../assets/images/center-img.jpg';
import headphone from '../../assets/images/headphone.png';
import request from '../../assets/images/request.png';
import Partner from '../../assets/images/Partner.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <section class="hero-section">
                <div class="container">
                    <div class="hero-content">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="hero-content-left">
                                    <span class="reform-title">Support for Government Reform</span>
                                    <h1>Integrated Solutions for Better Regulation</h1>
                                    <p>PAARS is a specialized advisory firm that supports governments in strengthening
                                        regulatory frameworks, improving policymaking processes, and designing strategies to
                                        enhance innovation, accountability, and institutional effectiveness.</p>
                                    <div class="btn-contact-wrapper">
                                        <a href="#" class="btn-contact">
                                            <span class="btn-text">About Us</span>
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
                            <div class="col-lg-5">
                                <div class="hero-content-right">
                                    <img src={hero} alt="hero-image" />
                                    <div class="image-overlay"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <div class="our_service">
                <div class="container">
                    <div class="our_service_inner">
                        <div class="our_service_text">
                            <span class="reform-title">Our Services</span>
                            <h3 class="section_title">Strategic Services for Smarter Regulation

                            </h3>
                            <p class="disc-text">PAARS offers specialized services to help governments build transparent,
                                effective, and modern regulatory systems.</p>
                        </div>
                        <div class="our_service_main">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="our_service_card">
                                        <div class="our_service_icon">
                                            <img src={hugeicons} alt="hugeicons-icon" />
                                        </div>
                                        <div class="our_service_text_box">
                                            <h3>Regulatory Blueprint </h3>
                                            <p>A strong regulatory system needs clear frameworks, strong institutions, and
                                                effective tools. PAARS helps governments design and optimize Better
                                                Regulation
                                                systems to ensure smarter, and goal-aligned policy making.</p>
                                            <div class="service_area">
                                                <Link to="services/regulatory-blueprint">Explore this service area <i
                                                    class="fa-solid fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="our_service_card">
                                        <div class="our_service_icon">
                                            <img src={iconoir_magic_wand} alt="iconoir_magic-icon" />
                                        </div>
                                        <div class="our_service_text_box">
                                            <h3>Catalyst Projects </h3>
                                            <p>Regulatory reform requires practical, focused solutions. Through Catalyst
                                                Projects, PAARS supports governments with tailored strategies froms
                                                takeholder engagement, capacity building...</p>
                                            <div class="service_area">
                                                <Link to="services/catalyst">Explore this service area <i
                                                    class="fa-solid fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="our_service_card">
                                        <div class="our_service_icon">
                                            <img src={flask} alt="Flask-icon" />
                                        </div>
                                        <div class="our_service_text_box">
                                            <h3>Regulatory Blueprint </h3>
                                            <p>A strong regulatory system needs clear frameworks, strong institutions, and
                                                effective tools. PAARS helps governments design and optimize Better
                                                Regulation
                                                systems to ensure smarter, and goal-aligned policy making.</p>
                                            <div class="service_area">
                                                <a href="./regulatory-blueprint.html">Explore this service area <i
                                                    class="fa-solid fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="our_service_card">
                                        <div class="our_service_icon">
                                            <img src={menu_book} alt="Menu-Book-icon" />
                                        </div>
                                        <div class="our_service_text_box">
                                            <h3>Catalyst Projects </h3>
                                            <p>Regulatory reform requires practical, focused solutions. Through Catalyst
                                                Projects, PAARS supports governments with tailored strategies froms
                                                takeholder engagement, capacity building...</p>
                                            <div class="service_area">
                                                <Link to="services/regulatory-academy">Explore this service area <i
                                                    class="fa-solid fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Services */}
            {/* How We Work */}
            <div class="how_we_work">
                <div class="container">
                    <div class="">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="how_we_work_left">
                                    <span class="reform-title">How We Work</span>
                                    <div class="how_we_work_left_content" data-aos="zoom-in">
                                        <h3 class="section_title">Strategic Partnerships for Smarter Regulation</h3>
                                        <p class="disc-text">PAARS partners with governments and institutions to deliver
                                            tailored, high-impact regulatory reforms. Our collaborative approach blends
                                            strategic planning, technical expertise, and a deep understanding of
                                            institutional
                                            needs.</p>
                                    </div>
                                    <div class="btn-contact-wrapper">
                                        <a href="javascript:void(0)" class="btn-contact getInTouch">
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
                            <div class="col-md-6">
                                <div class="right-col">
                                    <div class="step-wrapper">
                                        <div class="steps" data-aos="fade-up">
                                            <img src={assessment} alt="assessment" />
                                            <div class="content_steps">
                                                <h3 class="step-title">Assessment</h3>
                                                <p class="step-desc">We assess the regulatory framework by reviewing gaps,
                                                    consulting stakeholders, and aligning reforms with international best
                                                    practices.</p>
                                            </div>
                                        </div>
                                        <div class="steps" data-aos="fade-up">
                                            <img src={streamline_target} alt="streamline_target" />
                                            <div class="content_steps">
                                                <h3 class="step-title">Strategy</h3>
                                                <p class="step-desc">PAARS crafts custom regulatory strategies using
                                                    diagnostics, Better Regulation tools, and digital innovation to
                                                    modernize governance.</p>
                                            </div>
                                        </div>
                                        <div class="steps" data-aos="fade-up">
                                            <img src={Implementation} alt="Implementation" />
                                            <div class="content_steps">
                                                <h3 class="step-title">Implementation</h3>
                                                <p class="step-desc">We helps make reform plans effective by supporting
                                                    implementation, training officials, and creating tools for lasting
                                                    impact.</p>
                                            </div>
                                        </div>
                                        <div class="steps" data-aos="fade-up">
                                            <img src={teenyicons_screen_outline} alt="teenyicons_screen-outline" />
                                            <div class="content_steps">
                                                <h3 class="step-title">Monitoring</h3>
                                                <p class="step-desc">We supports reform plans by aiding implementation,
                                                    training officials, and creating tools to ensure lasting impact.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* How We Work */}

            {/* Why Choose PAARS */}

            <div class="why_choose_paars">
                <div class="container">
                    <div class="why_choose_paars_inner">
                        <div class="why_choose_paars_content" data-aos="zoom-in">
                            <span class="reform-title">What Sets Us Apart</span>
                            <h3 class="section_title">Why Choose PAARS</h3>
                            <p class="disc-text">In a complex regulatory landscape, PAARS offers expert guidance for
                                designing effective, transparent, and adaptable policies, combining technical expertise and
                                global experience to deliver measurable results.</p>
                        </div>

                        <div class="approach-grid">

                            <div class="left-col">
                                <div class="feature-box" data-aos="fade-right">
                                    <div class="feature-icon">
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <div class="feature-content">
                                        <h3>Strategic & Detail-Oriented Approach</h3>
                                        <p>PAARS offers data-driven, practical regulatory solutions, helping institutions
                                            design
                                            Better Regulation frameworks, implement tools, and strengthen governance with
                                            expertise.</p>
                                    </div>
                                </div>
                                <div class="feature-box" data-aos="fade-right">
                                    <div class="feature-icon">
                                        <img src={icon2} alt="icon" />
                                    </div>
                                    <div class="feature-content">
                                        <h3>Measurable Impact</h3>
                                        <p>Our approach is focused on delivering tangible improvements in governance,
                                            accountability, and regulatory effectiveness. PAARS works closely with
                                            institutions to establish clear performance indicators, measure the impact of
                                            reforms, and ensure that regulatory improvements are sustainable over time. </p>
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
                                        <img src={icon3} alt="icon" />
                                    </div>
                                    <div class="feature-content">
                                        <h3>Global Experience</h3>
                                        <p>PAARS brings a global perspective to regulatory reform, with experience in Latin
                                            America and Europe. We align solutions with global best practices while
                                            tailoring them to local contexts, supported by collaborations with organizations
                                            like the OECD.</p>
                                    </div>
                                </div>
                                <div class="feature-box" data-aos="fade-left">
                                    <div class="feature-icon">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <div class="feature-content">
                                        <h3>Innovative & Future-Oriented</h3>
                                        <p>PAARS helps governments modernize regulatory frameworks using AI, digital tools,
                                            and agile methodologies to enhance governance and public consultation. We
                                            provide forward-thinking solutions to keep pace with societal and technological
                                            trends.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose PAARS */}

            {/* Together for Better Governance */}
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
            {/* Together for Better Governance */}


        </div>
    )
}

export default Home