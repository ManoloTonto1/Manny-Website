import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [react(), ssr({ prerender: true })],
	base: '/Manny-Website/',
	ssr: {
		noExternal: ['magicscroll','slick-carousel','react-slick', 'enquire.js']
	}
};

export default config;
