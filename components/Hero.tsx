import React from 'react';
import information from '../assets/information.json';
function Hero() {
	return (
		<section id="home-hero" className="home-hero">
			<div className='hero-bg'></div>
			<div className="home-hero__content">
				<div className="home-hero__info">
					<h1 className="heading-primary home-hero__heading-primary">
						<span className="heading-primary__sm"> {information.hero.greeting}</span>
						<span className="heading-primary__main">
							{information.hero.text}
						</span>
					</h1>
					<div className='flex-container'>
						<a className="btn btn-theme home-hero__btn-theme" href="#projects" >Projects</a>
						<a className="btn btn-inv home-hero__btn-theme" href="#contact">Contact</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;