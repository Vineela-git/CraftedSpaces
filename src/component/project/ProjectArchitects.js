import React, {useState, useEffect} from 'react';
import ProjectPropOne from './itemProp/ProjectPropOne';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectData from "../../data/project/ArchitectCompanyData.json";

const filters = [
	{
		id: 1,
		label: "Featured Projects Showcase",
    },
    {
		id: 2,
		label: "Customer Testimonials",
    },
    {
		id: 3,
		label: "Project Portfolio",
    }
];


const AllData = ProjectData;

console.log(AllData);

const ProjectOne = ({parentClass, colSize, itemShow, columnGap}) => {

	const [getAllItems] = useState(AllData);
	const [visibleProject] = useState(itemShow ? itemShow : 30);
    const [activeFilter, setActiveFilter] = useState("");
	const [visibleItems, setVisibleItems] = useState([]);
	

	useEffect(() => {
        setActiveFilter(filters[0].label);
		setVisibleItems(getAllItems.filter((item) => item.id <= visibleProject));
    }, []);
console.log(visibleItems);

	const handleChange = (e) => {
		try{
        e.preventDefault();
		let target = e.target.textContent;

        setActiveFilter(target);
		console.log("Check here");

        let tempData = [];
		
        if (target === filters[0].label) {
			tempData = getAllItems.filter((data) => data.id <= visibleProject);
        } else {
			for (let i = 21; i < getAllItems.length; i++) {
				const element = getAllItems[i];
				let categories = element['category'];
				
				if (categories.includes(target)) {
					tempData.push(element)
				} 
			}
        }
        setVisibleItems(tempData);
		console.log(tempData);
	}
	catch(error){
		console.error('An error occurred:', error);
	}
    };


    return (
		<>
			<div className={`section section-padding-2 ${parentClass ? parentClass : ""}`}>
                <div className="container">
				
                <SectionTitle 
                        subtitle="Our Project"
                        title="Some of our <br>
                        finest work."
                        textAlignment="heading-left mb--40"
                        textColor=""
                    />
                    <div className="isotope-button isotope-project-btn">

						{filters.map((filter) => (
							<button onClick={handleChange} className={
								filter.label === activeFilter
								? "is-checked"
								: " "
							} 
							key={filter.id}>{filter.label}</button>
						))}

					</div>
					<div className={`row ${columnGap ? columnGap : "row-35"}`}>
						{visibleItems.map((data) => (
							<div className={colSize ? colSize : "col-md-6"} key={data.id}>
								<ProjectPropOne projectStyle="" portfolio={data}/>
							</div>
						))}
					</div>

                </div>
                <ul className="shape-group-7 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>
            </div>
		</>
    )
}

export default ProjectOne;