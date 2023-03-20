import { CardContent, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { motion } from 'framer-motion';
import React from 'react';

function Projects() {
	return (
		<>
			<h2
				style={{
					textAlign: 'center',
				}}
				className="txt-pink"
			>
        Projects
			</h2>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={4}>
					<Card>
						<CardActionArea
							sx={{
								minHeight: 500,
							}}
						>
							<CardContent sx={{
							}}>
								<h3 style={{textAlign:'center'}}>Theater Baget</h3>
							</CardContent>

							<div style={{
								height: 400,
							}}>
								<motion.div
									animate={{
										backgroundPosition: ['0% 0%','100% 100%','0% 0%'],
										transition: {
											duration: 8,
											repeat: Infinity,
											repeatType: 'reverse',

										},
									}}
									style={{
										height: '100%',
										width: '100%',
										backgroundImage: 'url(theaterBaget.png)',
										backgroundSize: 'cover',
										backgroundPosition: '0% 0%',
									}}
								></motion.div>

							</div>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}

export default Projects;
