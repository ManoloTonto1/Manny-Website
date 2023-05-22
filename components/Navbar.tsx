import React from 'react';
import information from '../assets/information.json';
import { NavbarLink, ResponsiveNavbarLink } from './NavbarLink';
function Navbar() {
	return (
		<header className="main-header">
			<div className="main-header__logo-container">
				<div className="main-header__logo-img-cont">
					<img
						src={information.navbar.logo}
						alt="logo Image" className="main-header__logo-img" />
				</div>
				<h4 className="main-header__logo-text">{information.navbar.title}</h4>
			</div>
			<nav className="main-header__navigation">
				<ul className="main-header__navigation-links">
					{information.navbar.links.map((link: unknown) => {
						return (
							<NavbarLink
								key={link.name}
								href={link.href}
								text={link.name}
							/>
						);
					})
					}
				</ul>
			</nav>
			<div className="main-header__sm-scr-nav-btn">
				<div className="main-header__sm-scr-nav-btn-line"></div>
				<div className="main-header__sm-scr-nav-btn-line"></div>
			</div>
			<div className="main-header__sm-menu">
				<div className="main-header__sm-menu-close">

				</div>
				<ul className="main-header__sm-menu-links">
					{information.navbar.links.map((link: unknown) => {
						return (
							<ResponsiveNavbarLink
								key={link.name}
								href={link.href}
								text={link.name}
							/>
						);
					})
					}
				</ul>
			</div>
			{/* <button className="btn btn-theme btn-sm">Download CV</button>  */}
		</header>
	);
}

export default Navbar;