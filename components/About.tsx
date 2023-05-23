import React from 'react';
import { information } from './information';

export type Skill = {
	name: string;
	icon?: string;
}

function About() {

	return (
		<section id="about" className="about main-section">
			<div className="main-container secondary-bg">
				<h2 className="heading-secondary projects__heading-secondary secondary-bg">
					<span className="heading-secondary__main secondary-bg">
						{information.about.title}
					</span>
				</h2>
				<div className="main-section__content secondary-bg">
					<div className="about__info secondary-bg">
						<div className="about__main-info secondary-bg">
							<h3 className="heading-quaternary about__heading-quaternary secondary-bg">
                  My Story
							</h3>
							<p className="text-primary about__text-primary secondary-bg">
								<span className='secondary-bg'>
									{information.about.story}
								</span>
                    
							</p>
							<a className="btn btn-theme about__btn-theme" href='#projects'>Projects</a>
						</div>
						<div className="about__skill-info secondary-bg">
							<h3 className="heading-quaternary about__heading-quaternary secondary-bg">
                  My Skills
							</h3>
							<ul className="about__skills secondary-bg">
								{information.skills.map((skill: Skill) => {
									return (
										<li className="about__skill" key={skill.name}>{skill.name}</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;