import React, { useEffect } from "react";
import { useState } from "react";
import HeaderThree from "../common/header/HeaderThree";
import SEO from "../common/SEO";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Tilty from "react-tilty";
import Accordion from "react-bootstrap/Accordion";
import ProjectPropTwo from "../component/project/itemProp/ProjectPropTwo";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Ensure correct import
import FooterTwo from "../common/footer/FooterTwo";
import ProjectData from "../data/project/ProjectData.json";


const Professionalpage = () => {
   console.log(useParams());
    let { companyName } = useParams();
    console.log(companyName);

    const [professional, setProfessional] = useState(null);
    const [loading, setLoading] = useState(false);
    const [toggler, setToggler] = useState(false);
  
     useEffect(() => {
    const fetchProfessionDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3001/professionals/companyname/${companyName}`);
        setProfessional(response.data);
      } catch (err) {
        console.error("Error fetching professional details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessionDetails();
  }, [companyName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!professional) {
    return <div>No professional found.</div>;
  }
  return (
    <>
      <SEO title="Personal Portfolio" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderThree />
        {/* Banner */}
        <div className="banner banner-style-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-content">
                  <span className="subtitle">{professional.professionaltype}</span>

                  <h1 className="title">{professional.companyname}</h1>

          
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-thumbnail">
                  <div className="large-thumb">
                    <Tilty perspective={9000} reset={false}>
                      <img
                        src={`http://localhost:3001/${professional.profilePicture}`}
                        alt="Shape"
                        style={{
                          borderRadius: "30px",
                          boxShadow: "0 8px 8px rgba(0, 0, 0.8, 0.8)", // Adjust shadow properties as needed
                        }}
                      />
                    </Tilty>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-unstyled shape-group-20">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-32.png"}
                alt="Bubble"
              />
            </li>
            {/* <li className="shape shape-2">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-33.png"} alt="Bubble" />
                </li> */}
            <li className="shape shape-4">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
                alt="Bubble"
              />
            </li>
            <li className="shape shape-5">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"}
                alt="Bubble"
              />
            </li>
            {/* <li className="shape shape-6">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-30.png"} alt="Bubble" />
                </li> */}
            <li className="shape shape-7">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-31.png"}
                alt="Bubble"
              />
            </li>
            <li className="shape shape-8 marque-images" />
          </ul>
        </div>

        {/* Banner */}

        {/* AboutUS */}

        <section className="demo-section-padding  single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-heading heading-left mb-0">
                  <h3 className="title">About Us</h3>
                </div>

                <p> {professional.aboutus}
                 </p>
              </div>
              <div className="col-lg-6 offset-xl-1">
                <div className="why-choose-us">
                  <div className="section-heading heading-left"></div>
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <FaCompress /> Strategy
                      </Accordion.Header>
                      <Accordion.Body>{professional.strategy}
                         </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <FaCode /> Design
                      </Accordion.Header>
                      <Accordion.Body>{professional.design}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <FaGlobe /> Development
                      </Accordion.Header>
                      <Accordion.Body>{professional.development}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AboutUs */}

        {/* Video */}
        <div className="section section-padding-equal bg-color-light">
          <div className="container">
            <div className="about-expert">
              <div className="thumbnail">
                <h3>Our Spaces</h3>
                <img
                  src={process.env.PUBLIC_URL + "/images/about/demo-video.png"}
                  alt="Thumbnail"
                />
                <div className="popup-video">
                  <button
                    className="play-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ul className="shape-group-16 list-unstyled">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/circle-2.png"}
                alt="circle"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
                alt="Line"
              />
            </li>
          </ul>
        </div>
        <FsLightbox
          toggler={toggler}
          sources={["https://youtu.be/ZcEBJJWkFUM?si=FQXZvx2UmDwqUpZ5"]}
        />

        {/* Video */}

        {/* Projects */}
        <div className="section section-padding-equal bg-color-dark">
            <div className="container">
            <SectionTitle 
                subtitle="Portfolio"
                title="Our projects"
                description="Discover Our Projects: Transforming Dreams into Reality."
                textAlignment="heading-light-left"
                textColor=""
            />
            {/* <div className="row row-45">
            {portfolioData.filter(data => data.id===58 ||data.id===59||data.id === 57).map((data) => (
                    <div className="col-md-6" key={data.id}>
                        <ProjectPropTwo projectStyle="project-style-4" portfolio={data}/>
                    </div>
                ))}

            </div> */}
        
        </div>
    </div>
        {/* projects*/}

        <div className="section-padding bg-color-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-address mb--30">
                  <SectionTitle
                    subtitle="Need a designer?"
                    title="Let’s work together"
                    description=""
                    textAlignment="heading-light-left"
                    textColor=""
                  />
                  <div className="address-list">
                    <div className="address">
                      <h6 className="title">Email</h6>
                      <p>{professional.email}</p>
                    </div>
                    <div className="address">
                      <h6 className="title">Address</h6>
                      <p>{professional.address}</p>
                      <p>{professional.city}</p>
                      <p>{professional.state}</p>

                    </div>
                    <div className="address">
                      <h6 className="title">Phone</h6>
                      <p>{professional.officephone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterTwo />
      </main>
    </>
  );
};

export default Professionalpage;
