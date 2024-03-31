import React, {useState, useEffect} from 'react';
import ProjectPropOne from './itemProp/ProjectPropOne';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ArchitectCompanyData from "../../data/service/ArchitectCompanyData.json";


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


const AllData = ArchitectCompanyData;


const ProjectOne = ({parentClass, colSize, itemShow, columnGap}) => {

	const [getAllItems] = useState(AllData);
	const [visiableProject] = useState(itemShow ? itemShow : 6);
    const [activeFilter, setActiveFilter] = useState("");
	const [visibleItems, setVisibleItems] = useState([]);
   

	

	useEffect(() => {
        setActiveFilter(filters[0].label);
		setVisibleItems(getAllItems.filter((item) => item.id <= visiableProject));
    }, []);

	const handleChange = (e) => {
        e.preventDefault();
		let target = e.target.textContent;

        setActiveFilter(target);

        let tempData = [];
        if (target === filters[0].label) {
			tempData = getAllItems.filter((data) => data.id <= visiableProject);
        } else {
			for (let i = 0; i < getAllItems.length; i++) {
				const element = getAllItems[i];
				let categories = element['category'];
				
				if (categories.includes(target)) {
					tempData.push(element)
				} 
			}
        }
        setVisibleItems(tempData);
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
            </div>
		</>
    )
}

export default ProjectOne;