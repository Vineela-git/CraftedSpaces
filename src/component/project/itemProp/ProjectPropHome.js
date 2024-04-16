import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../../utils';


const PropOne = ({projectStyle, portfolio}) => {
	
    return (
		<>
			<div className={`project-grid ${projectStyle}`}>
				<div className="thumbnail">
				<Link to={process.env.PUBLIC_URL + "#"}>
					<img src={process.env.PUBLIC_URL + portfolio.image} alt="icon" />
				</Link>
				</div>
				<div className="content">
				<h4 className="title"> 
					{/* <Link to={process.env.PUBLIC_URL + "#"}>{portfolio.title}</Link> */}
				</h4>
				<span className="subtitle">
					{portfolio.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
                <p>{portfolio.excerpt}</p>

				</div>
			</div>
		</>
    )
}

export default PropOne;