import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Container, createTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownIcon from './components/ArrowDownIcon';
import Flex from './components/Flex';
import Navbar from './components/NavBar';
import Projects from './components/Projects';

const theme = createTheme({
	palette: {
		mode: 'dark'
	}
});
function App() {

	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Container>
				<Flex style={{
					marginTop: '5rem',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}>

					<motion.h1
						style={{
							textAlign: 'center',
							marginTop: '0',
							lineHeight: '1.2',
						}}>
						My name is <span
							className='gradient'
						>
							Manuel Lopez 
						</span> and I make computers go 💥
					</motion.h1>
					<h2
						style={{
							maxWidth: '45rem',
							textAlign: 'center',
						}}>
						I'm a software engineer based in The Hague, <span className='dutch-flag'>Netherlands</span>.
					</h2>
				</Flex>
				<Projects/>
			</Container>
		</ThemeProvider>
	);
}

export default App;
