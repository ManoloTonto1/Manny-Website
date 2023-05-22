import React from 'react';
import information from '../assets/information.json';
import Project, { ProjectProps } from './Project';
function Projects() {
	return (
		<section id="projects" className="projects main-section">
			<div className="main-container">
				<h2 className="heading-secondary projects__heading-secondary">
					<span className="heading-secondary__main">
						{information.projectInfo.title}
					</span>
				</h2>
				<div className="main-section__content">
					<div className="projects__list">
						{information.projects.map((project: ProjectProps, index: number) => {
							if (index % 2 != 0) {
								return (
									<div key={project.name} className="projects__list-item projects__list-item--inv">
										<Project
											{...project}
										/>
									</div>
								);
							}
							return (
								<div key={project.name} className="projects__list-item">
									<Project
										{...project}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;