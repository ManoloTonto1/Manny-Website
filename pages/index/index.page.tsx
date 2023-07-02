import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import SkillCarousel from '../../components/SkillCarousel';
import Projects from '../../components/Projects';

export { Page };

function Page() {

	return (
		<>
			<Hero />
			<About />
			<SkillCarousel />
			<Projects/>
		</>
	);
}
