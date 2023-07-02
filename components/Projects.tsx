import React from 'react';
import {information} from './information';
import Project from './Project';
import { usePageContext } from '../renderer/usePageContext';
import { Repo } from '../pages/index/index.page.server';
function Projects() {
	const pagectx = usePageContext();
	console.log(pagectx);
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
						{pagectx.pageProps.repos.map((project: Repo, index: number) => {
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