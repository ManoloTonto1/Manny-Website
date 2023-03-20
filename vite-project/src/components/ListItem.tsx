import { motion } from 'framer-motion';
import React from 'react';

type ListItemProps = {
    style?: React.CSSProperties;
    children: React.ReactNode;
};
function ListItem(props: ListItemProps) {
	return (
		<motion.li
			whileHover={{
				scale: 1.1,
                
			}}
			whileTap={{ scale: 0.9 }}
			style={props.style}
		>
			{props.children}
		</motion.li>
	);
}

export default ListItem;