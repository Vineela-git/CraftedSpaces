import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import ServiceData from "../../data/service/ArchitectCompanyData.json";




const ProjectPropArchitect = ({colSize, serviceStyle, serviceData}) => {

    return (
		<>
			{serviceData.map((data, index) => (
				<div className={colSize} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} alt="icon" />
						</div>
						<div className="content">
							<h5 className="title"> 
								<Link to={process.env.PUBLIC_URL + `/${slugify(data.title)}`}>{data.title}</Link>
							</h5>
							<p>{data.description}</p>

						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default ProjectPropArchitect;