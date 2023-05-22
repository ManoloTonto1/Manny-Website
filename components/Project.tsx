import React from 'react';

export type ProjectProps = {
    name: string;
    description: string;
    liveLink: string;
    codeLink: string;
    image: string;
}
function Project(props: ProjectProps) {
	return (
		<div className="projects__list-item-details">
			<div className="projects__list-item-img-cont">
				<img src={props.image ? props.image: './assets/placeholder.png'} alt={`image of ${props.name}`} className="projects__list-item-img" />
			</div>
			<h3 className="heading-tertiary projects__list-item-heading-tertiary">
				{props.name}
			</h3>
    
			<p className="text-primary projects__list-item-text-primary">
				{props.description}
			</p>
			{props.liveLink && (
				<a className="btn btn-theme projects__btn-theme"
					target='_blank'
					rel='noopener noreferrer'
					href={props.liveLink}>
                    Live Link
				</a>
			)}{props.codeLink && (
				<a className="btn btn-inv projects__btn-inv"
					target='_blank'
					rel='noopener noreferrer'
					href={props.codeLink}
				>Code Link</a>
			)}
		</div>
	);
}

export default Project;