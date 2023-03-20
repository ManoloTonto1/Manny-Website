import { motion } from 'framer-motion';
import React from 'react';
type ButtonProps = {
    style?: React.CSSProperties;
    children: React.ReactNode;
};
// eslint-disable-next-line react/display-name
const _Button = React.forwardRef((props: ButtonProps, ref) => (
	<button ref={ref} style={props.style}>
		{props.children}
	</button>
));
const Button = motion(_Button);
export default  Button;