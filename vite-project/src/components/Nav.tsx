import { motion } from 'framer-motion';
import React from 'react';
type NavProps = {
	style?: React.CSSProperties;
	children: React.ReactNode;
};
function Nav(props : NavProps) {
	return (
		<motion.nav style={props.style} aria-label='primary-menu'>
			{props.children}
		</motion.nav>
	);
}

export default Nav;
