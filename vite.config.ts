import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const productionCode = {
	base: '/Manny-Website/' ,
	ssr: {
		noExternal: ['magicscroll','slick-carousel','react-slick', 'enquire.js']
	}
};
const config: UserConfig = {
	plugins: [react(), ssr({ prerender: true })],
	base: process.env.NODE_ENV === 'production'? productionCode.base:undefined,
	ssr: process.env.NODE_ENV === 'production'?  productionCode.ssr:undefined 
	
	
};

export default config;
