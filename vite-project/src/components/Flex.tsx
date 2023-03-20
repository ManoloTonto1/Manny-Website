import { motion } from 'framer-motion';
import React from 'react';

type FlexProps = {
    style?: React.CSSProperties;
    children: React.ReactNode;
};
// eslint-disable-next-line react/display-name
const _Flex = React.forwardRef((props: FlexProps, ref ) => (
	<div ref={ref} style={props.style} className='flex'>{props.children}</div>
));
const Flex = motion(_Flex);

export default Flex;