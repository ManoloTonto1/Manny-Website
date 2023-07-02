import React from 'react';
import { Repo } from '../pages/index/index.page.server';
import { information } from './information';

export type ProjectProps = {
  title: string;
  description: string;
  liveLink?: string;
  codeLink?: string;
  image?: string;
};
function Project(props: Repo) {
	const getLanguangeIcon = (language: string) => {
		if (!language) {
			return '';
		}
		const skill = information.skills.find((s) =>
			s.name.toLowerCase().includes(props.language.toLowerCase())
		);
		if (skill) {
			return skill.icon;
		}
	};
	return (
		<div className="projects__list-item-details">
			
			<div className="projects__list-item-img-cont">
				<img
					src={props.image ? props.image : './placeholder.png'}
					alt={`image of ${props.title}`}
					className="projects__list-item-img"
				/>
			</div>
			<h3 className="heading-tertiary projects__list-item-heading-tertiary">
				{props.name}
			</h3>
			{props.language && getLanguangeIcon(props.language)? (
				<div className="skills-showcase__list-item" style={{
					marginBottom: '1rem'
				}}>
					<i className={getLanguangeIcon(props.language)}></i>
				</div>
			) : (
				''
			)}

			<p className="text-primary projects__list-item-text-primary">
				{props.description} <br />
        stars: {props.stars} <br />

			</p>
			{props.homepage && (
				<a
					className="btn btn-theme projects__btn-theme"
					target="_blank"
					rel="noopener noreferrer"
					href={props.homepage}
				>
          Live Link
				</a>
			)}
			{props.url && (
				<a
					className="btn btn-inv projects__btn-inv"
					target="_blank"
					rel="noopener noreferrer"
					href={props.url}
				>
          Code Link
				</a>
			)}
		</div>
	);
}

export default Project;
