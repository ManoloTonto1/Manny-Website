import React from 'react';
import { motion } from 'framer-motion';

function ArrowDownIcon() {
	return (
		<motion.button
			whileHover={{
				scale: 1.1,
                
			}}
			whileTap={{
				scale: 0.9,
			}}
			style={{
				backgroundColor: 'transparent',
			}}>
			<motion.svg
				style={{
					width: '7rem',
					fill: '#f32688',
				}}
                
				animate={{
					y: [0, 10, 0],
					transition: {
						duration: 1,
						repeat: Infinity,
						repeatType: 'reverse',
					},
                    
				}}
				focusable="false"
				aria-hidden="true"
				viewBox="0 0 24 24"
				data-testid="ArrowDownwardIcon"
			>
				<path
					d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
			</motion.svg>
		</motion.button>
	);
}

export default ArrowDownIcon;
