import { motion } from 'framer-motion';
import React from 'react';
type ListProps = {
    style?: React.CSSProperties;
    children: React.ReactNode;
};
function List(props: ListProps) {
	return (
		<motion.ul style={props.style}>
			{props.children}
		</motion.ul>
	);
}

export default List;