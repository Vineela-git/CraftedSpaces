import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Expertise and Experience",
        para: "Experience unmatched quality and craftsmanship with our seasoned team of construction experts"
    },
    {
        id: 2,
        title: "Personalized Service",
        para: "Our personalized approach ensures every project receives the attention it deserves, tailored to your unique vision."
    },
    {
        id: 3,
        title: "Transparent Communication",
        para: "Transparent communication and dedication to client satisfaction are the cornerstones of our service."
    },
    {
        id: 4,
        title: "Innovative Solutions",
        para: "Choose innovation and sustainability with our forward-thinking construction solutions."
    },
    {
        id: 5,
        title: "Quality Workmanship",
        para: "Our skilled craftsmen and attention to detail ensure that each aspect of your construction project is executed to the highest standards"
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Crafting Success"
                    title="Why should you work with us?"
                    description="Discover the Difference: Elevate Your Construction Experience with Us"
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;