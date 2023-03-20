import { Container } from '@mui/system';
import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Button from './Button';
import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import Nav from './Nav';

function Navbar() {
	const windowSize = useWindowSize();
	return (
		<Nav>
			<Container maxWidth={'xl'}>
				<Flex
					style={{
						justifyContent: 'space-between',
					}}
				>
					<List>
						<Flex>
							<ListItem>
								<a href="#home" className="logo">
                  Manuel Lopez
								</a>
							</ListItem>
							{windowSize.innerWidth > 768 && 
							(
								<>
									<ListItem>
										<a href="#projects">Projects</a>
									</ListItem>
									<ListItem>
										<a href="#about">About</a>
									</ListItem>
								</>
							)}
						</Flex>
					</List>

					<Flex
						style={{
							alignItems: 'center',
						}}
					>
						<Button
							whileHover={{
								scale: 1.1,
								border: '1px solid #fff',
							}}
							whileTap={{
								scale: 0.9,
							}}
						>
              Lets get in touch!
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Nav>
	);
}

export default Navbar;
