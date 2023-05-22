import React from 'react';

export type NavbarLinkProps = {
	href: string;
	text: string;
}
export function NavbarLink(props: NavbarLinkProps) {
	return (
		<li className="main-header__navigation-link"><a href={props.href}> {props.text} </a></li>
	);
}

export function ResponsiveNavbarLink(props: NavbarLinkProps) {
	return (
		<li>
			<a className="main-header__sm-menu-link main-header__sm-menu-link" >{props.text}</a>
		</li>
	);
}