import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect } from 'react';
import information from '../assets/information.json';
import Slider from 'react-slick';
const settings = {
	dots: false,
	infinite: true,
	
	slidesToScroll: 1,
	autoplay: true,
	speed: 2000,
	autoplaySpeed: 2000,
	cssEase: 'linear'
};

const SkillCarousel = () => {
	const [width, setWidth] = React.useState(768);
	useEffect(() => {
		const handleWindowResize = async (): Promise<void> => {
			const { innerWidth } = window;
			setWidth(innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	},[]);
	return (
		<section className="skills-showcase">
			<Slider
				{...settings}
				slidesToShow={width >= 768 ? 8 : 3}
				className='skills-showcase__list'
				arrows={false}
			>
				{information.skills.map((skill) => {
					if (!skill.icon)
						return null;
					return (
						<div key={skill.name}>
							<div className="skills-showcase__list-item">
								<i className={skill.icon}></i>
							</div>
						</div>
					);
				})}
			</Slider>
		</section>
	);
};

export default SkillCarousel;
