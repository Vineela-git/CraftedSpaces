import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from '../../elements/section-title/SectionTitle';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const WhyChooseOne = () => {
    return (
      <div className="section-padding bg-color-light">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="why-choose-us">
                <SectionTitle 
                    subtitle="About Us"
                    title="Why branding matters?"
                    description=""
                    textAlignment=""
                    textColor=""
                />
                <p>Effective branding and marketing efforts ensure that your 
                    target audience knows about your product or service. 
                    They help in making your brand visible in the market, increasing the chances 
                    of attracting potential customers.</p>
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                            <Accordion.Body>
                            A strong brand with consistent messaging and quality 
                            products/services builds trust and credibility among consumers. 
                            People are more likely to choose a brand they recognize and trust 
                            over unfamiliar ones.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><FaCode /> Design</Accordion.Header>
                            <Accordion.Body>
                            Good branding and marketing create emotional connections with customers, 
                            fostering loyalty. When customers resonate with your brand identity and 
                            values, they are more likely to remain loyal and become repeat buyers.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                            <Accordion.Body>
                            Building a strong brand and implementing effective marketing strategies can contribute 
                            to the long-term success and sustainability of your business. 
                            It helps create a solid foundation for growth and expansion.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
                <div className="why-choose-us mb--30">
                <div className="why-choose-thumb">
                    <img src={process.env.PUBLIC_URL + "/images/project/project-17.png"} alt="Office" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}

export default WhyChooseOne;